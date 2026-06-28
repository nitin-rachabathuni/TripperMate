import { FAQ_ITEMS, RELEASES_URL, SITE_NAME, SITE_TAGLINE, SITE_URL } from "./site";

export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: SITE_TAGLINE,
    sameAs: ["https://github.com/nitin-rachabathuni/TripperMate"],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/faq?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "NavigationApplication",
    operatingSystem: "Android 10+",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    downloadUrl: RELEASES_URL,
    description: SITE_TAGLINE,
    featureList: [
      "Tripper dash H.264 navigation stream",
      "Screen-off low power riding",
      "Multi-waypoint Google Maps routes",
      "JioSaavn and Spotify dash music widget",
      "Off-route rerouting",
    ],
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function howToInstallSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to install TripperMate on Android",
    description: "Install TripperMate APK and connect to your Royal Enfield Tripper dash.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Download APK",
        text: "Download the latest TripperMate APK from GitHub Releases.",
        url: RELEASES_URL,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Allow unknown apps",
        text: "Enable Install unknown apps for your browser or file manager.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Share destination",
        text: "Share a destination from Google Maps to TripperMate and tap Send to Dash.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Connect to dash Wi‑Fi",
        text: "Connect to your bike RE_* Wi‑Fi hotspot and start navigation.",
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
