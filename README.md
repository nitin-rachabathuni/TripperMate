<div align="center">

# 🏔️ TripperMate

### Cool navigation for your Royal Enfield Tripper dash — phone screen **OFF**, battery **ON**

[![Release](https://img.shields.io/github/v/release/nitin-rachabathuni/TripperMate?style=for-the-badge&color=orange&label=Download)](https://github.com/nitin-rachabathuni/TripperMate/releases/latest)
[![CI](https://img.shields.io/github/actions/workflow/status/nitin-rachabathuni/TripperMate/ci.yml?branch=main&style=for-the-badge&label=Build)](https://github.com/nitin-rachabathuni/TripperMate/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/nitin-rachabathuni/TripperMate?style=for-the-badge&color=blue)](LICENSE)
[![Android](https://img.shields.io/badge/Android-10%2B-green?style=for-the-badge&logo=android)](https://github.com/nitin-rachabathuni/TripperMate/releases/latest)

**Himalayan 450 · Guerrilla 450 · Scram 411 · any Tripper `RE_*` dash**

[⬇️ Download APK](https://github.com/nitin-rachabathuni/TripperMate/releases/latest) · [Quick start](#-quick-start) · [Features](#-features) · [Credits](#-credits)

---

<img src="https://img.shields.io/badge/Stream-H.264%20to%20Dash-red?style=flat-square" alt="H264"/>
<img src="https://img.shields.io/badge/Power-2--4%20fps%20%7C%20screen%20off-success?style=flat-square" alt="power"/>
<img src="https://img.shields.io/badge/Maps-OSRM%20%2B%20OpenFreeMap-blue?style=flat-square" alt="maps"/>
<img src="https://img.shields.io/badge/Music-JioSaavn%20%7C%20Spotify-purple?style=flat-square" alt="music"/>

</div>

> ⚠️ **Community project** — not affiliated with Royal Enfield. Unofficial Wi‑Fi link to the Tripper display only (no ECU access). Use at your own risk.

---

## 🔥 Why TripperMate?

| Official RE app | TripperMate |
|-----------------|-------------|
| 📱 Phone screen **ON** all ride | 📴 Screen **OFF** — map streams to dash |
| 🌡️ Phone gets **hot** | ❄️ Hardware H.264 at **2–4 fps**, thermal throttle |
| 🔋 Battery dead by lunch | 🔋 Built for **long rides** |

TripperMate renders the map **off-screen**, encodes to **H.264**, and streams over the bike's `RE_*` Wi‑Fi — so your phone stays cool in the tank bag.

Forked from the excellent [NorthStar](https://github.com/adityadasika21/NorthStar) with stability fixes for real riders.

---

## ⬇️ Download (one tap)

### 👉 [**Get the latest APK → Releases**](https://github.com/nitin-rachabathuni/TripperMate/releases/latest)

1. Open the link **on your phone**
2. Download `TripperMate-v*.apk`
3. Tap install → allow **Unknown apps** if asked
4. Done — no account, no Play Store

---

## 🏍️ Supported bikes

| Bike | Dash | Status |
|:----:|:----:|:------:|
| **Himalayan 450** | Tripper | ✅ Primary |
| **Guerrilla 450** | Tripper | ✅ Supported |
| **Scram 411** | Tripper | ✅ Supported |
| Other RE + Tripper | Tripper | 🟡 Best-effort (`RE_*` Wi‑Fi) |

Default dash password: `12345678` (changeable in Settings)

---

## 🚀 Quick start

```
Google Maps  →  Share  →  TripperMate  →  Send to Dash  →  Connect Wi‑Fi  →  Ride 🏍️
```

1. **Install** TripperMate from [Releases](https://github.com/nitin-rachabathuni/TripperMate/releases/latest)
2. **Share** a destination from Google Maps → pick TripperMate
3. Tap **Send to Dash** and connect to `RE_*` Wi‑Fi
4. Turn your phone screen **OFF** — navigation keeps running on the dash

> 💡 **ColorOS / MIUI / HyperOS / Motorola:** If the Wi‑Fi popup never shows, join `RE_*` manually in system Wi‑Fi first, then tap **Connect** in the app.

---

## ✨ Features

| | Feature |
|---|---------|
| 🧭 | Turn-by-turn nav with **correct turn icons** (not stuck on roundabout) |
| 📍 | **Multi-waypoint** routes from Google Maps directions links |
| 🔀 | Off-route **rerouting** + voice guidance |
| 🎵 | **JioSaavn**, Spotify, any media → dash music widget + **album art** |
| 🔍 | Dash **zoom in/out** + reset to default zoom (joystick) |
| 🌡️ | **Thermal throttling** when phone gets warm |
| 📊 | Ride history, garage maintenance log, fuel diary |
| ☁️ | Optional Firebase sync (bring your own `google-services.json`) |

---

## 🛠️ Build locally

```bash
./gradlew :app:assembleDebug
```

Release build (see `signing.properties.example`):

```bash
./gradlew :app:assembleRelease
```

---

## 🙏 Credits

| Project | Role |
|---------|------|
| [NorthStar](https://github.com/adityadasika21/NorthStar) | Original dash navigation app |
| [better-dash](https://github.com/norbertFeron/better-dash) | Tripper protocol reference |

**License:** MIT — see [LICENSE](LICENSE) and [NOTICE](NOTICE)

---

<div align="center">

**Made for Royal Enfield riders who love the mountains — and their phone battery.** 🏔️🏍️

⭐ Star the repo if TripperMate saved your ride!

</div>
