import type { MetadataRoute } from "next";
import { SUPPORTED_BIKES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const bikes = SUPPORTED_BIKES.map((b) => ({
    url: `${SITE_URL}/bikes/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/download`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/bikes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    ...bikes,
  ];
}
