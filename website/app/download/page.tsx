import type { Metadata } from "next";
import { DownloadButton } from "@/components/UI";
import { APK_VERSION, RELEASES_URL, SITE_URL } from "@/lib/site";
import { howToInstallSchema, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Download TripperMate APK",
  description:
    "Download TripperMate v1.0.1 APK for Android. Free navigation app for Royal Enfield Tripper dash — Himalayan 450, Guerrilla 450, Scram 411.",
  alternates: { canonical: `${SITE_URL}/download` },
};

export default function DownloadPage() {
  return (
    <>
      {jsonLdScript(howToInstallSchema())}
      <div className="mx-auto max-w-2xl px-5 py-20 text-center">
        <h1 className="font-display text-4xl uppercase tracking-wide md:text-5xl">
          Download TripperMate
        </h1>
        <p className="mt-4 text-lg text-mist">
          Version {APK_VERSION} · Android 10+ · arm64 · ~73 MB
        </p>
        <div className="mt-10">
          <DownloadButton label="Download from GitHub Releases" />
        </div>
        <ol className="mt-16 space-y-6 text-left text-mist">
          {[
            "Open the link on your Android phone (not iPhone).",
            "Download TripperMate-v*.apk from the latest release.",
            "Tap the file → Install. Allow unknown apps if Android asks.",
            "Open TripperMate → grant Location and Notification access.",
            "Share a destination from Google Maps → Send to Dash.",
          ].map((step, i) => (
            <li key={step} className="flex gap-4">
              <span className="font-display text-rust">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-xs text-mist">
          Direct link: <a href={RELEASES_URL} className="text-rust-light underline">{RELEASES_URL}</a>
        </p>
      </div>
    </>
  );
}
