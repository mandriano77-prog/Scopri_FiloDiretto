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

## Updating the video — REQUIRED re-render procedure

Editing `artifacts/filo-diretto-video/src/components/video/video_scenes/Scene*.tsx` does NOTHING to the landing by itself. The landing plays a **pre-rendered** MP4 (`attached_assets/filo-diretto-promo-hd.mp4`, imported in `home.tsx`). Any video change (e.g. "ingrandire i caratteri") must be re-rendered into that file; then the user must Republish.

**Why:** a CSS-looking change never reaches users via the scene code — only the baked MP4 is served. This was the non-obvious trap.

Headless re-render runbook (took many attempts to get right):
- Keep `pkgs.chromium` in `replit.nix` — intentionally retained for this; removing it forces a slow Nix rebuild next time.
- Drive that nix chromium (via its `executablePath`) with `playwright-core` `recordVideo` over `http://localhost:80/video/` at 1280×720. Install `playwright-core` in an isolated `/tmp` dir, NOT the pnpm workspace root (root rejects it). Symlink system ffmpeg into Playwright's expected ffmpeg path so recordVideo works.
- For a clean start: `goto` → settle → `reload`, then record one loop.
- **Screencast has ~2–3s startup latency, so webm-time 0 ≠ context-creation wall time.** Do NOT trust a wall-clock offset for trimming — extract frames (a 1fps labeled mosaic works great) and find the real fresh scene-0 start (first non-blank frame right after the reload white blank).
- Trim from that frame for 80.431s; mux `public/audio/composite_audio.mp3` from t=0 (sync is linear because `SCENE_DURATIONS` are unchanged); encode H.264 720p yuv420p `+faststart`, AAC → ~6MB.
- **Run the whole render in a SINGLE foreground bash call** (~95s, fits the 120s limit). Detached/`setsid` runs get killed at bash-call boundaries (the tool cleans up agent-spawned procs), so any separate polling `sleep` call kills the recording mid-run.
