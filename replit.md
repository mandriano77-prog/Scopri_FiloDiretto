# Filo Diretto

Lead-acquisition landing page (used in paid advertising) for "Filo Diretto", an Italian internal-communications SaaS that reaches every employee — including deskless/frontline workers — through a digital Wallet pass (Apple/Google Wallet), with no app to install.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server
- `pnpm --filter @workspace/filo-diretto-landing run dev` — run the landing page (served at `/`)
- `pnpm --filter @workspace/filo-diretto-video run dev` — run the explainer video (served at `/video/`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, wouter, TanStack Query, framer-motion, react-hook-form + zod
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)

## Where things live

- Landing page: `artifacts/filo-diretto-landing` (react-vite, previewPath `/`). Page in `src/pages/home.tsx`; lead form + pricing in `src/components/landing/`.
- Explainer video: `artifacts/filo-diretto-video` (video artifact, previewPath `/video/`). NON-deployable on its own — embedded into the landing via an iframe to `/video/`.
- API server: `artifacts/api-server` — routes in `src/routes/` (`health.ts`, `leads.ts`).
- API contract (source of truth): `lib/api-spec/openapi.yaml`.
- DB schema (source of truth): `lib/db/src/schema/` (`leads.ts`).

## Architecture decisions

- Path-based multi-artifact: landing at `/`, video at `/video/`, API at `/api`, all routed by the shared proxy. The landing embeds the video with a root-relative iframe (`src="/video/"`), which works in both dev and production because both go through the same proxy.
- Lead capture is contract-first: define `POST /leads` in the OpenAPI spec → codegen produces the `useCreateLead` hook (frontend) and the `CreateLeadBody` Zod schema (server validation).
- Public pricing intentionally OMITS the internal "ARR per cliente" figures from the source design (internal revenue data, not for public display). Enterprise tier shows "Contattaci", no price.

## Product

- Single-page Italian landing: hero, explainer video, problem/solution narrative (deskless workforce, Wallet pass, push notifications, analytics, geolocated employee perks), pricing tiers, and a lead-capture form.
- Pricing tiers (public): SCALEUP (50–300, €1.290/mese), MID-MARKET (301–800, €2.990/mese), LARGE/featured (801–2.500, €5.990/mese), ENTERPRISE (>2.500, su misura → Contattaci).

## User preferences

- All landing copy is in Italian.
- Brand: editorial, dark "ink" backgrounds, cream text, electric purple accents; Instrument Serif (display) + Inter (body).

## Gotchas

- The video artifact is non-deployable standalone but ships as part of the project; the landing's `/video/` iframe relies on it being served behind the shared proxy.
- Do NOT add the internal ARR figures to the public pricing.
- After any OpenAPI change, re-run `pnpm --filter @workspace/api-spec run codegen` before using new hooks/schemas.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
