import type { ReactNode } from "react";
import { RELEASES_URL } from "@/lib/site";

export function DownloadButton({
  className = "",
  label = "Download APK",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={RELEASES_URL}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-rust px-8 py-4 font-display text-sm uppercase tracking-widest text-alpine glow-rust hover:bg-rust-light transition-all hover:scale-[1.02] ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3v12m0 0l4-4m-4 4L8 11M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {label}
    </a>
  );
}

export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-white/8 bg-ink/80 p-6 backdrop-blur-sm transition-colors hover:border-rust/40">
      <span className="text-2xl" aria-hidden>{icon}</span>
      <h3 className="mt-4 font-display text-lg uppercase tracking-wide text-alpine">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">{children}</p>
    </article>
  );
}

export function DashPreview() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden>
      <div className="dash-ring absolute inset-0 rounded-full" />
      <div className="absolute inset-[12%] overflow-hidden rounded-full border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate via-charcoal to-ink" />
        <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 200 200">
          <path d="M20 100 Q60 40 100 100 T180 100" fill="none" stroke="#c4550a" strokeWidth="2" strokeDasharray="4 6"/>
          <circle cx="100" cy="130" r="6" fill="#c4550a"/>
        </svg>
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="font-display text-xs uppercase tracking-widest text-rust-light animate-pulse-soft">Nav live</p>
          <p className="mt-1 font-display text-2xl text-alpine">2.4 km</p>
        </div>
      </div>
      <div className="absolute -right-2 top-1/4 rounded-lg border border-rust/30 bg-charcoal/90 px-3 py-2 text-xs text-mist backdrop-blur">
        Screen off ✓
      </div>
    </div>
  );
}
