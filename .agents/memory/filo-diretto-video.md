---
name: Filo Diretto promo video
description: What was checked when the user reported "il video non funziona", and the actual fix.
---

# Promo video "non funziona"

The landing's promo `<video>` (in `home.tsx`, section `#soluzione`) is technically sound — repeated "doesn't work" reports were NOT a codec/delivery/markup bug:

- Source MP4 is H.264 + AAC, faststart correct (`moov` atom at front, before `mdat`), yuv420p — universally playable.
- Delivery through the shared proxy returns `Content-Type: video/mp4`, `Accept-Ranges: bytes`, and 206 partial content in both dev and prod. Range playback works.
- Markup uses `controls playsInline preload="metadata"` with a `poster` — correct.

**The real issue was weight.** The original was 1080p / ~33MB / 80s — heavy for the mobile/cellular traffic a paid-ad landing gets, so it could look like it "won't play" (slow start / spinner). Fix: re-encode lighter with ffmpeg and point the `@assets` import at the smaller file:
`ffmpeg -i IN.mp4 -vf scale=-2:720 -c:v libx264 -profile:v main -pix_fmt yuv420p -crf 26 -preset veryfast -c:a aac -b:a 128k -movflags +faststart OUT.mp4` → ~2.4MB at 720p.

**Why:** content is motion-graphics/text, so it compresses extremely well; quality stays fine while load time drops dramatically.

**Discrepancy with `replit.md`:** the README claims the landing embeds the explainer via an iframe to `/video/`. It does NOT — there is no iframe; the landing uses a direct `<video>` MP4. The `/video/` artifact (video-js) runs but is not referenced by the landing. Don't trust the iframe claim; grep `home.tsx` for the real wiring.
