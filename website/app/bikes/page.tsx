import type { Metadata } from "next";
import Link from "next/link";
import { SUPPORTED_BIKES, SITE_URL } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Supported Royal Enfield Bikes",
  description:
    "TripperMate works with Himalayan 450, Guerrilla 450, Scram 411, and any Royal Enfield Tripper dash with RE_* Wi‑Fi.",
  alternates: { canonical: `${SITE_URL}/bikes` },
};

export default function BikesPage() {
  return (
    <>
      {jsonLdScript(
        breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Supported Bikes", url: `${SITE_URL}/bikes` },
        ]),
      )}
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h1 className="font-display text-4xl uppercase tracking-wide md:text-5xl">
          Supported Royal Enfield bikes
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-mist">
          TripperMate connects to any Tripper dash broadcasting <strong className="text-alpine">RE_*</strong> Wi‑Fi.
          These are the models riders use most.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SUPPORTED_BIKES.map((bike) => (
            <Link
              key={bike.slug}
              href={`/bikes/${bike.slug}`}
              className="group rounded-2xl border border-white/8 bg-ink p-8 transition-all hover:border-rust/50 hover:-translate-y-1"
            >
              <span className="text-xs font-display uppercase tracking-widest text-rust">{bike.status}</span>
              <h2 className="mt-3 font-display text-2xl uppercase text-alpine group-hover:text-rust-light">
                {bike.short}
              </h2>
              <p className="mt-3 text-sm text-mist">{bike.description}</p>
              <span className="mt-6 inline-block text-sm text-rust-light">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
