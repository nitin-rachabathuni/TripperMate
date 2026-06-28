import type { Metadata } from "next";
import { Oswald, Source_Serif_4 } from "next/font/google";
import { Header, Footer } from "@/components/Shell";
import {
  faqPageSchema,
  howToInstallSchema,
  jsonLdScript,
  organizationSchema,
  softwareApplicationSchema,
  webSiteSchema,
} from "@/lib/seo";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Royal Enfield Tripper Dash Navigation`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  keywords: [
    "TripperMate",
    "Royal Enfield navigation",
    "Himalayan 450 navigation app",
    "Tripper dash navigation",
    "RE Tripper app alternative",
    "Guerrilla 450 Tripper",
    "Scram 411 navigation",
    "motorcycle navigation Android",
    "screen off navigation",
  ],
  authors: [{ name: "TripperMate Community" }],
  creator: "TripperMate",
  publisher: "TripperMate",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Tripper Dash Navigation`,
    description: SITE_TAGLINE,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_TAGLINE,
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${sourceSerif.variable}`}>
      <head>
        {jsonLdScript([
          organizationSchema(),
          webSiteSchema(),
          softwareApplicationSchema(),
          faqPageSchema(),
          howToInstallSchema(),
        ])}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className="grain min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
