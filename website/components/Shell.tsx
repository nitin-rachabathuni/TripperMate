import Link from "next/link";
import { GITHUB_REPO, RELEASES_URL, SITE_NAME } from "@/lib/site";

const NAV = [
  { href: "/#features", label: "Features" },
  { href: "/bikes", label: "Bikes" },
  { href: "/faq", label: "FAQ" },
  { href: "/download", label: "Download" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-charcoal/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="dash-ring flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-rust">
            TM
          </span>
          <span className="font-display text-xl tracking-wide uppercase text-alpine group-hover:text-rust-light transition-colors">
            {SITE_NAME}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-wide text-mist hover:text-alpine transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          href={RELEASES_URL}
          className="glow-rust rounded-full bg-rust px-5 py-2.5 text-sm font-display uppercase tracking-wider text-alpine hover:bg-rust-light transition-colors"
        >
          Get APK
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg uppercase tracking-wide text-alpine">{SITE_NAME}</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Independent open-source navigation for Royal Enfield Tripper dash. Not affiliated with Royal Enfield.
          </p>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-widest text-rust">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li><Link href="/bikes/himalayan-450" className="hover:text-alpine">Himalayan 450</Link></li>
            <li><Link href="/bikes/guerrilla-450" className="hover:text-alpine">Guerrilla 450</Link></li>
            <li><Link href="/bikes/scram-411" className="hover:text-alpine">Scram 411</Link></li>
            <li><Link href="/faq" className="hover:text-alpine">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-widest text-rust">Project</p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li><a href={RELEASES_URL} className="hover:text-alpine">Download APK</a></li>
            <li><a href={GITHUB_REPO} className="hover:text-alpine">GitHub</a></li>
            <li><a href={`${GITHUB_REPO}/releases`} className="hover:text-alpine">Changelog</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-mist">
        © {new Date().getFullYear()} TripperMate · MIT License · Built for riders, by riders
      </div>
    </footer>
  );
}
