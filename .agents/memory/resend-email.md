---
name: Resend email (lead notifications)
description: How transactional email works for the lead form and the Resend account's verified domains.
---

# Resend email for lead capture

The lead form sends two emails via the Resend connector (Replit Integrations, `@replit/connectors-sdk` proxy) after persisting the lead: an internal notification + a branded confirmation to the lead.

**Non-obvious:** the connected Resend account already has several VERIFIED sending domains (sending enabled), including `filodiretto.app` and `preciseadvertising.tech`. So sending from `noreply@filodiretto.app` works with NO extra DNS/domain verification — do not tell the user they must verify a domain before emails work.

**Why:** Resend normally requires domain verification to send to arbitrary recipients; here it was already done out-of-band, which is not discoverable from the code.

**How to apply:** `from` defaults to `Filo Diretto <noreply@filodiretto.app>` (override `LEAD_FROM_EMAIL`); notify recipient overrides via `LEAD_NOTIFY_EMAIL`. Email failures must never break lead capture (lead is saved first; sends are isolated + time-boxed).
