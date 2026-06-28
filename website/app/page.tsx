import { DownloadButton, DashPreview, FeatureCard } from "@/components/UI";
import { GITHUB_REPO, RELEASES_URL } from "@/lib/site";

const FEATURES = [
  { icon: "🧭", title: "True turn-by-turn", body: "Correct maneuver icons on the Tripper dash — not stuck on roundabout symbols." },
  { icon: "📴", title: "Screen off riding", body: "Hardware H.264 at 2–4 fps. Your phone stays cool in the tank bag." },
  { icon: "📍", title: "Multi-waypoint", body: "Share Google Maps directions with stops — TripperMate routes through all of them." },
  { icon: "🎵", title: "Dash music", body: "JioSaavn, Spotify, any media app — album art on the Tripper music widget." },
  { icon: "🔀", title: "Smart rerouting", body: "Off-route detection with cellular-friendly reroute while dash Wi‑Fi stays connected." },
  { icon: "🌡️", title: "Thermal safe", body: "Auto-throttles stream rate when your phone gets warm — built for Indian summers." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-rust/20 blur-[120px]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-rust">Royal Enfield · Tripper Dash</p>
            <h1 className="mt-4 font-display text-5xl uppercase leading-[0.95] tracking-wide text-alpine md:text-6xl lg:text-7xl">
              Navigate the
              <span className="block text-rust-light">mountains.</span>
              Phone stays cool.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
              TripperMate streams turn-by-turn navigation to your Tripper TFT dash over Wi‑Fi —
              Himalayan 450, Guerrilla 450, Scram 411, and every <code className="text-rust-light">RE_*</code> dash.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <DownloadButton />
              <a
                href={GITHUB_REPO}
                className="rounded-full border border-white/15 px-8 py-4 font-display text-sm uppercase tracking-widest text-alpine hover:border-rust/50 transition-colors"
              >
                View on GitHub
              </a>
            </div>
            <p className="mt-6 text-xs text-mist">
              Free · Open source · Android 10+ · No Play Store required
            </p>
          </div>
          <DashPreview />
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="font-display text-3xl uppercase tracking-wide text-alpine md:text-4xl">
          Built for long rides
        </h2>
        <p className="mt-3 max-w-2xl text-mist">
          The official RE app mirrors your screen and cooks your phone. TripperMate renders off-screen,
          encodes once, and streams low-power video the dash already knows how to decode.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title}>
              {f.body}
            </FeatureCard>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-ink/50">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="font-display text-3xl uppercase tracking-wide">How it works</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["Share", "Pick a destination in Google Maps → Share → TripperMate"],
              ["Route", "Preview the road route and tap Send to Dash"],
              ["Connect", "Join your bike RE_* Wi‑Fi and authenticate once"],
              ["Ride", "Turn screen off. Navigation lives on the Tripper."],
            ].map(([title, body], i) => (
              <li key={title} className="relative rounded-xl border border-white/8 p-6">
                <span className="font-display text-4xl text-rust/40">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-lg uppercase">{title}</h3>
                <p className="mt-2 text-sm text-mist">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <h2 className="font-display text-4xl uppercase tracking-wide text-alpine">
          Ready to ride smarter?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-mist">
          Join riders on Himalayan 450 and Guerrilla 450 who switched to TripperMate for cooler phones and cleaner dash nav.
        </p>
        <div className="mt-10">
          <DownloadButton label="Download TripperMate APK" />
        </div>
        <p className="mt-4 text-xs text-mist">
          Latest release on{" "}
          <a href={RELEASES_URL} className="text-rust-light underline">GitHub Releases</a>
        </p>
      </section>
    </>
  );
}
