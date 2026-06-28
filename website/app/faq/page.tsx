import type { Metadata } from "next";
import { DownloadButton } from "@/components/UI";
import { FAQ_ITEMS, RELEASES_URL, SITE_URL } from "@/lib/site";
import { faqPageSchema, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ — TripperMate Royal Enfield Navigation",
  description:
    "Answers about TripperMate: supported bikes, installation, ColorOS Wi‑Fi, vs official RE app, and Tripper dash compatibility.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

export default function FaqPage() {
  return (
    <>
      {jsonLdScript(faqPageSchema())}
      <div className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="font-display text-4xl uppercase tracking-wide">FAQ</h1>
        <p className="mt-4 text-mist">
          Common questions about TripperMate, Royal Enfield Tripper dash navigation, and APK installation.
        </p>
        <dl className="mt-12 space-y-8">
          {FAQ_ITEMS.map(({ q, a }) => (
            <div key={q} className="border-b border-white/8 pb-8">
              <dt className="font-display text-lg uppercase text-alpine">{q}</dt>
              <dd className="mt-3 leading-relaxed text-mist">{a}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-16 rounded-2xl border border-rust/30 bg-ink p-8 text-center">
          <p className="text-mist">Still have questions? Open an issue on GitHub.</p>
          <div className="mt-6 flex justify-center gap-4">
            <DownloadButton />
            <a href={RELEASES_URL} className="rounded-full border border-white/15 px-6 py-4 text-sm uppercase tracking-widest text-alpine">
              Releases
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
