# Deploy su Railway

Il progetto gira come **un solo servizio**: l'API Express ([artifacts/api-server](artifacts/api-server))
serve sia le route `/api` sia la landing statica buildata ([artifacts/filo-diretto-landing](artifacts/filo-diretto-landing)).

## Cosa fa il build

`pnpm run build:deploy`:
1. builda la landing (Vite) → `artifacts/filo-diretto-landing/dist/public`
2. builda l'API (esbuild) → `artifacts/api-server/dist/index.mjs`
3. copia la landing dentro `artifacts/api-server/dist/public` (la serve l'Express)

Avvio: `pnpm run start` → `node artifacts/api-server/dist/index.mjs`.

## Passi su Railway

1. **New Project → Deploy from GitHub repo** → scegli `mandriano77-prog/Scopri_FiloDiretto`.
   Railway legge `railway.json` (build + start già configurati).
2. **Add → Database → PostgreSQL** nello stesso progetto.
3. Nel servizio app, **Variables**:
   - `DATABASE_URL` = `${{Postgres.DATABASE_URL}}` (riferimento al DB del progetto)
   - `RESEND_API_KEY` = la tua chiave da https://resend.com/api-keys
   - `LEAD_FROM_EMAIL` = `Filo Diretto <noreply@TUODOMINIO>` (dominio verificato su Resend)
   - `LEAD_NOTIFY_EMAIL` = `info@preciseadvertising.tech`
   - `PORT` lo inietta Railway da solo.
4. **Crea la tabella `leads`** (una volta sola), da locale con `DATABASE_URL` del DB Railway:
   ```sh
   DATABASE_URL="<url-del-db-railway>" pnpm --filter @workspace/db run push
   ```
5. **Deploy** e apri l'URL pubblico (Settings → Networking → Generate Domain).
6. (Opzionale) **Dominio custom** `filodiretto.app`: Settings → Networking → Custom Domain,
   poi imposta il CNAME indicato nel tuo DNS.

## Email (Resend)

Le email partono solo se `RESEND_API_KEY` è impostata **e** il dominio del mittente
(`LEAD_FROM_EMAIL`) è verificato in Resend. Finché non lo è, il lead viene comunque
salvato nel database (l'invio email non blocca la richiesta).

## Variabili d'ambiente

Vedi [.env.example](.env.example).
