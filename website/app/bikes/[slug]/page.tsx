import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DownloadButton } from "@/components/UI";
import { SUPPORTED_BIKES, SITE_URL } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SUPPORTED_BIKES.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bike = SUPPORTED_BIKES.find((b) => b.slug === slug);
  if (!bike) return {};
  return {
    title: `${bike.name} Tripper Navigation App`,
    description: bike.description,
    alternates: { canonical: `${SITE_URL}/bikes/${slug}` },
    keywords: [
      `${bike.short} navigation app`,
      `${bike.short} Tripper dash`,
      "Royal Enfield TripperMate",
      "Tripper navigation Android",
    ],
  };
}

export default async function BikePage({ params }: Props) {
  const { slug } = await params;
  const bike = SUPPORTED_BIKES.find((b) => b.slug === slug);
  if (!bike) notFound();

  return (
    <>
      {jsonLdScript(
        breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Bikes", url: `${SITE_URL}/bikes` },
          { name: bike.short, url: `${SITE_URL}/bikes/${slug}` },
        ]),
      )}
      <article className="mx-auto max-w-3xl px-5 py-20">
        <p className="font-display text-xs uppercase tracking-widest text-rust">{bike.dash}</p>
        <h1 className="mt-3 font-display text-4xl uppercase tracking-wide md:text-5xl">
          {bike.name}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-mist">{bike.description}</p>

        <section className="mt-12 space-y-4 rounded-2xl border border-white/8 bg-ink p-8">
          <h2 className="font-display text-xl uppercase">Why riders choose TripperMate</h2>
          <ul className="list-disc space-y-2 pl-5 text-mist">
            <li>Phone screen off — no OLED burn, less heat on {bike.short} tours</li>
            <li>Share routes from Google Maps with waypoints</li>
            <li>Music and album art on the Tripper widget</li>
            <li>Works on ColorOS, MIUI, HyperOS, and stock Android</li>
          </ul>
        </section>

        <div className="mt-12">
          <DownloadButton label={`Get TripperMate for ${bike.short}`} />
        </div>
      </article>
    </>
  );
}
