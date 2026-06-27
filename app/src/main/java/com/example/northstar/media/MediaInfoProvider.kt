package com.example.northstar.media

import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.media.MediaMetadata
import android.media.session.MediaController
import android.media.session.MediaSessionManager
import android.media.session.PlaybackState
import android.provider.Settings
import android.util.Log
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

/**
 * Reads the phone's active now-playing session (Spotify, JioSaavn, YT Music, etc.) via
 * MediaSessionManager. Prefers the session that is actively PLAYING so regional apps
 * like JioSaavn aren't skipped when another idle session sits first in the list.
 */
class MediaInfoProvider(private val context: Context) {

    private val _nowPlaying = MutableStateFlow<NowPlaying?>(null)
    val nowPlaying: StateFlow<NowPlaying?> = _nowPlaying.asStateFlow()

    private val msm = context.getSystemService(MediaSessionManager::class.java)
    private val component = ComponentName(context, NorthstarNotificationListener::class.java)
    private var controller: MediaController? = null

    private val controllerCb = object : MediaController.Callback() {
        override fun onMetadataChanged(metadata: MediaMetadata?) { publish() }
        override fun onPlaybackStateChanged(state: PlaybackState?) { publish() }
        override fun onSessionDestroyed() { bind(null) }
    }

    private val sessionsCb = MediaSessionManager.OnActiveSessionsChangedListener { list -> bind(list) }

    fun start() {
        if (!isAccessGranted(context)) {
            Log.i(TAG, "no notification access — now-playing disabled")
            com.example.northstar.data.RideDiagnostics.log("media", "now-playing: NO notification access")
            return
        }
        runCatching {
            msm?.addOnActiveSessionsChangedListener(sessionsCb, component)
            val sessions = msm?.getActiveSessions(component)
            com.example.northstar.data.RideDiagnostics.log("media", "now-playing: ${sessions?.size ?: 0} active media session(s)")
            bind(sessions)
        }.onFailure {
            Log.w(TAG, "start failed: ${it.message}")
            com.example.northstar.data.RideDiagnostics.log("media", "now-playing start FAILED: ${it.message}")
        }
    }

    fun stop() {
        runCatching { msm?.removeOnActiveSessionsChangedListener(sessionsCb) }
        controller?.unregisterCallback(controllerCb)
        controller = null
        _nowPlaying.value = null
    }

    fun skipNext(): Boolean = runCatching { controller?.transportControls?.skipToNext() != null }.getOrDefault(false)
    fun skipPrevious(): Boolean = runCatching { controller?.transportControls?.skipToPrevious() != null }.getOrDefault(false)

    /** Pick the best session: playing first, then buffering, then any with metadata. */
    private fun pickSession(list: List<MediaController>?): MediaController? {
        if (list.isNullOrEmpty()) return null
        val playing = list.filter {
            val st = it.playbackState?.state
            st == PlaybackState.STATE_PLAYING || st == PlaybackState.STATE_BUFFERING
        }
        if (playing.isNotEmpty()) {
            // Prefer highest playback state (PLAYING over BUFFERING)
            return playing.maxByOrNull { it.playbackState?.state ?: 0 }
        }
        return list.firstOrNull { c ->
            val md = c.metadata ?: return@firstOrNull false
            !md.getString(MediaMetadata.METADATA_KEY_TITLE).isNullOrBlank() ||
                !md.getString(MediaMetadata.METADATA_KEY_ARTIST).isNullOrBlank()
        } ?: list.firstOrNull()
    }

    private fun bind(list: List<MediaController>?) {
        val top = pickSession(list)
        if (top?.sessionToken == controller?.sessionToken) { publish(); return }
        controller?.unregisterCallback(controllerCb)
        controller = top
        controller?.registerCallback(controllerCb)
        publish()
    }

    private fun publish() {
        val c = controller
        val md = c?.metadata
        if (md == null) { _nowPlaying.value = null; return }
        val title = md.getString(MediaMetadata.METADATA_KEY_TITLE).orEmpty()
        val album = md.getString(MediaMetadata.METADATA_KEY_ALBUM).orEmpty()
        val artist = md.getString(MediaMetadata.METADATA_KEY_ARTIST).orEmpty()
        if (title.isBlank() && artist.isBlank()) { _nowPlaying.value = null; return }
        val art = md.getBitmap(MediaMetadata.METADATA_KEY_ALBUM_ART)
            ?: md.getBitmap(MediaMetadata.METADATA_KEY_ART)
            ?: md.getBitmap(MediaMetadata.METADATA_KEY_DISPLAY_ICON)
        val state = c.playbackState?.state ?: PlaybackState.STATE_NONE
        val playing = state == PlaybackState.STATE_PLAYING || state == PlaybackState.STATE_BUFFERING
        _nowPlaying.value = NowPlaying(title, album, artist, art, playing)
    }

    companion object {
        private const val TAG = "MediaInfoProvider"

        fun isAccessGranted(context: Context): Boolean {
            val flat = Settings.Secure.getString(context.contentResolver, "enabled_notification_listeners")
                ?: return false
            return flat.split(":").any { it.contains(context.packageName) }
        }

        fun accessSettingsIntent() = Intent(Settings.ACTION_NOTIFICATION_LISTENER_SETTINGS)
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
    }
}
