package com.example.northstar.data

data class SharedLocation(
    val name: String,
    val lat: Double? = null,
    val lng: Double? = null,
    val url: String? = null,
    val needsExpansion: Boolean = false,
    /** Intermediate stops from a Google Maps directions share (lat, lng pairs). */
    val waypoints: List<Pair<Double, Double>> = emptyList(),
)

/** A destination the rider saved to navigate to again. Persisted in SQLite. */
data class SavedLocation(
    val id: Long = 0,
    val name: String,
    val lat: Double,
    val lng: Double,
    val note: String = "",
    val createdMs: Long = System.currentTimeMillis(),
    val sid: String = "",       // stable cross-device id (Firestore doc id)
)
