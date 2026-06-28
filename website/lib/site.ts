/** Canonical site URL — set via Vercel env NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://trippermate.vercel.app";

export const SITE_NAME = "TripperMate";
export const SITE_TAGLINE =
  "Cool navigation for Royal Enfield Tripper dash — phone screen off, battery on.";

export const GITHUB_REPO = "https://github.com/nitin-rachabathuni/TripperMate";
export const RELEASES_URL = `${GITHUB_REPO}/releases/latest`;
export const APK_VERSION = "1.0.1";

export const SUPPORTED_BIKES = [
  {
    slug: "himalayan-450",
    name: "Royal Enfield Himalayan 450",
    short: "Himalayan 450",
    dash: "Tripper TFT",
    status: "Primary",
    description:
      "TripperMate is built for Himalayan 450 riders who want turn-by-turn navigation on the Tripper dash without overheating their phone.",
  },
  {
    slug: "guerrilla-450",
    name: "Royal Enfield Guerrilla 450",
    short: "Guerrilla 450",
    dash: "Tripper TFT",
    status: "Supported",
    description:
      "Guerrilla 450 owners with the Tripper dash can use TripperMate via the standard RE_* Wi‑Fi hotspot protocol.",
  },
  {
    slug: "scram-411",
    name: "Royal Enfield Scram 411",
    short: "Scram 411",
    dash: "Tripper",
    status: "Supported",
    description:
      "Scram 411 Tripper dash navigation with low-power H.264 streaming and screen-off riding.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "What is TripperMate?",
    a: "TripperMate is a free Android app that streams turn-by-turn navigation to the Royal Enfield Tripper TFT dash over Wi‑Fi. Your phone screen can stay off, which keeps the device cool and saves battery on long rides.",
  },
  {
    q: "Which Royal Enfield bikes work with TripperMate?",
    a: "Any Royal Enfield with a Tripper dash that broadcasts a Wi‑Fi network starting with RE_ — including Himalayan 450, Guerrilla 450, and Scram 411. The app auto-discovers your dash hotspot.",
  },
  {
    q: "How is TripperMate different from the official Royal Enfield app?",
    a: "The official RE app mirrors your phone screen to the dash, keeping the OLED on and draining battery. TripperMate renders the map off-screen, hardware-encodes H.264 video, and streams at 2–4 fps so your phone stays cool in your tank bag.",
  },
  {
    q: "How do I install TripperMate?",
    a: "Download the latest APK from GitHub Releases, allow install from unknown sources on Android, and open the app. No Google Play account required.",
  },
  {
    q: "Does TripperMate work on ColorOS, MIUI, or Motorola phones?",
    a: "Yes. TripperMate includes an OEM Wi‑Fi fallback: if the system join dialog is blocked, connect to your bike's RE_* network manually in Wi‑Fi settings, then tap Connect in the app.",
  },
  {
    q: "Is TripperMate affiliated with Royal Enfield?",
    a: "No. TripperMate is an independent open-source community project. It is not endorsed by Royal Enfield. Use at your own risk.",
  },
  {
    q: "Does TripperMate need Google Maps API keys?",
    a: "No. Share destinations from Google Maps into TripperMate. Routing uses OSRM; maps use OpenFreeMap. No API keys required.",
  },
  {
    q: "What Android version is required?",
    a: "Android 10 (API 29) or newer. arm64 devices only (all modern phones).",
  },
] as const;
