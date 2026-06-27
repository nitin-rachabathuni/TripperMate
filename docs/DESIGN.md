# TripperMate v1.0.0 Design

Based on [NorthStar](https://github.com/adityadasika21/NorthStar). See README for download.

## Decision log

| Decision | Choice | Why |
|----------|--------|-----|
| Name | TripperMate | Clear Tripper dash branding |
| Package | `com.trippermate.app` | Separate install from NorthStar |
| Wi‑Fi | OEM fallback via existing `RE_*` connection | Fixes ColorOS/MIUI/HyperOS (#8, #9) |
| Turn icons | Patch route card default glyph + OSRM→dash map | Template had 0x3C roundabout stuck (#10) |
| Nav rate | 2 Hz nav TLV | Faster distance updates (#10) |
| Thermal | Throttle to 1 fps when Hot | Brother's heat issue |
| Waypoints | OSRM multi-coordinate + `/dir/` URL parse | Issue #12 |
| Music | Prefer PLAYING MediaSession | JioSaavn (#11) |
| Album art | Chunked 05 40 protocol | Issue #4 |
| Distribution | GitHub Releases APK | User request |
