---
name: video-js scaffold typecheck quirk
description: Why `pnpm --filter <video-slug> run typecheck` fails on a freshly scaffolded video-js artifact even when the video runs and exports fine.
---

A video-js artifact's `tsc --noEmit` typecheck reports errors in **scaffold files you did not write and must not change** — `src/lib/video/hooks.ts` (Cannot find name 'window'), `src/lib/video/animations.ts` (framer-motion Variant/transition mismatches), and `src/main.tsx` (Cannot find name 'document'). These are pre-existing DOM-lib/framer-motion strictness issues in the template, not caused by your edits.

**Why:** the video-js scaffold ships with these type errors out of the box. `hooks.ts` is explicitly DO-NOT-MODIFY (export/recording pipeline depends on it).

**How to apply:** Do not chase these typecheck failures or "fix" them by editing scaffold files. The authoritative signal for a video build is: `scripts/validate-recording.sh` passes + Vite workflow logs are clean + no browser console errors. The first_build.md skill says explicitly "no need to test or code review the first build beyond the scene-selector validation." Only worry about typecheck errors that point at files you actually created (e.g. VideoTemplate.tsx, VideoWithControls.tsx, useSceneControls.ts).
