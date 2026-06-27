# TripperMate

**Cool, low-power navigation for Royal Enfield Tripper dash bikes — phone screen off.**

TripperMate is a community Android app for **Royal Enfield riders** with the round **Tripper TFT dash** — Himalayan 450, Guerrilla 450, Scram 411, and any bike that broadcasts `RE_*` Wi‑Fi.

It renders the map off-screen, hardware-encodes to H.264, and streams to your dash so the phone stays cool in your tank bag.

> Independent project — **not affiliated with Royal Enfield.** Unofficial dash link; use at your own risk. Only streams video + reads the joystick over Wi‑Fi.

---

## Why TripperMate?

The official RE app mirrors your phone screen — OLED on, phone hot, battery dead by lunch.

TripperMate streams a **custom map feed** to the dash at **2–4 fps** with the **screen off**. Built for long rides.

This project is based on the excellent open-source [NorthStar](https://github.com/adityadasika21/NorthStar) by adityadasika21 (Apache-2.0). TripperMate adds stability fixes, OEM Wi‑Fi support, turn-by-turn corrections, multi-waypoint routing, music/album art, and thermal throttling.

---

## Download (easy)

### One-tap APK

**[Download latest APK → Releases](https://github.com/nitin-rachabathuni/TripperMate/releases/latest)**

1. Open the link on your phone
2. Download `TripperMate-*.apk`
3. Allow "Install unknown apps" when prompted
4. Install — no account needed

### Supported bikes

Any Royal Enfield with **Tripper dash** and `RE_*` Wi‑Fi hotspot (factory password `12345678` unless changed).

| Bike | Dash | Status |
|------|------|--------|
| Himalayan 450 | Tripper | Primary target |
| Guerrilla 450 | Tripper | Supported |
| Scram 411 | Tripper | Supported |
| Other RE + Tripper | Tripper | Best-effort via `RE_*` protocol |

---

## Quick start

1. Install TripperMate
2. Share a destination from **Google Maps** → choose TripperMate
3. Tap **Send to Dash** → connect to your bike Wi‑Fi when prompted
4. Turn phone screen **off** — navigation continues on the dash

**Tip for ColorOS/MIUI/HyperOS/Motorola:** If the Wi‑Fi dialog never appears, join `RE_*` manually in system Wi‑Fi settings first, then tap Connect in the app.

---

## Features

- Turn-by-turn navigation with correct turn icons (not stuck on roundabout)
- Multi-waypoint routes from Google Maps directions links
- Off-route rerouting, voice guidance, ride history, garage maintenance log
- JioSaavn / Spotify / any media app on dash music widget + album art
- Dash zoom in/out + recenter to default zoom (joystick)
- Thermal throttling when phone gets warm
- Optional Firebase sync (bring your own `google-services.json`)

---

## Build locally

```bash
./gradlew :app:assembleDebug
```

Release APK (needs `signing.properties` — see `signing.properties.example`):

```bash
./gradlew :app:assembleRelease
```

---

## Credits

- [NorthStar](https://github.com/adityadasika21/NorthStar) — original dash navigation app
- [better-dash](https://github.com/norbertFeron/better-dash) — Tripper protocol reference (Apache-2.0)

MIT License — see [LICENSE](LICENSE) and [NOTICE](NOTICE).
