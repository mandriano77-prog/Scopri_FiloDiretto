---
name: Filo Diretto / HR2Wallet promo video
description: Brand + structural constraints for the filo-diretto-video artifact (animated HR SaaS explainer).
---

The video promotes an HR SaaS ("Filo Diretto" wordmark) whose real marketing brand is **HR2Wallet** (site: hr2wallet.netlify.app). Italian-only audience.

**Brand to match (editorial style):** black #0A0A0A bg, cream #F4EDE2 text, electric purple #8B5CF6 / #7C3AED accent — NO teal. Display font **Anton** (big condensed headlines), body **Inter**. Magazine/editorial feel, restrained motion. Real concrete copy: "HR parla. Tutti leggono.", 95%+ lettura, zero app, push sulla lock screen, automazioni (compleanni/anniversari/reminder/quiz/survey), pass also works as QR/NFC badge.
**Why:** the user rejected the first cut (teal + glowy "filo" thread + geometric sans) as off-brand and "grafica scarsa" with overlapping text; they want it aligned to the live site.
**Naming decision:** keep the wordmark **"Filo Diretto"** (user chose this over "HR2Wallet") even though the site says HR2Wallet.

**Hard structural constraint — audio sync:** `composite_audio.mp3` is pre-mixed against `SCENE_DURATIONS` (keys/order/values) in VideoTemplate.tsx. Do NOT change scene keys/order/durations without re-mixing the composite (per video-js audio.md: adelay per scene-start+300ms, music vol 0.20, -t 90). To make pacing "faster" without desync, speed up the per-scene phase timers / animation easings, not the durations.
**How to apply:** any future edit that touches scene timing must either keep SCENE_DURATIONS identical or regenerate composite_audio.mp3 in lockstep. Scenes use grid/flex with `pt-28 pb-28` safe padding to clear the persistent top/bottom editorial chrome — keep that to avoid text overlap.

**Lesson — delegate video-js work to the DESIGN subagent (don't hand-build):** the first two cuts were built directly by the main agent with only text + CSS shapes; the user rejected them as "grafica scarsa", "manca impaginazione", and not "umano". The fix that landed was delegating the iteration to the DESIGN subagent, which generated/downloaded real stock photography of people and produced editorial layouts.
**Why:** the DESIGN subagent has image-generation / stock-photo / web-search tools the main agent lacks; a "human", produced feel for this product *requires* real imagery of people (hands holding a phone with a lock-screen, work environments), not shapes+type. Hand-built video-js output reads as a slideshow.
**How to apply:** for any video-js build OR iteration, delegate to the DESIGN subagent per the video-js skill; pass user feedback verbatim + the hard constraints (locked SCENE_DURATIONS, name, don't-touch audio/hooks). Main agent still owns audio (composite mix) and workflow restart/verification afterwards.

**Content preference — avoid the acronym "HR" in on-screen Italian copy:** the user finds "HR" awkward to pronounce in Italian. Use "Comunicazione Interna", "Pannello Personale", or "L'azienda" instead. The product wordmark stays "Filo Diretto".
**Feature beats the user wants emphasized (employee-facing):** badge (the wallet pass doubles as NFC/QR company badge, works offline), engagement (real, measured), reward (premi erogati), and especially **100% legal/privacy compliance** ("a norma di privacy") — the legal-reassurance beat matters most when addressing employees, so give it clear visual weight, not a footnote.
