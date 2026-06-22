// Email sending via the Resend HTTP API.
// Requires RESEND_API_KEY (create one at https://resend.com/api-keys).
import { logger } from "./lib/logger";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_ENDPOINT = "https://api.resend.com/emails";

// Sender must be an address on a domain VERIFIED in Resend.
// Override via env once filodiretto.app (or a subdomain) is verified.
const FROM_ADDRESS = process.env.LEAD_FROM_EMAIL ?? "Filo Diretto <noreply@filodiretto.app>";
// Where internal lead notifications are delivered.
const NOTIFY_ADDRESS = process.env.LEAD_NOTIFY_EMAIL ?? "info@preciseadvertising.tech";

export type LeadEmailData = {
  name: string;
  email: string;
  company: string;
  companySize: string;
  role?: string | null;
  phone?: string | null;
  plan?: string | null;
  message?: string | null;
};

type ResendPayload = {
  from: string;
  to: string;
  subject: string;
  html: string;
  reply_to?: string;
};

// Cap how long a single send may block the request path (Resend stalls).
const SEND_TIMEOUT_MS = 3000;

async function sendViaResend(payload: ResendPayload): Promise<void> {
  if (!RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set; cannot send email");
  }

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Resend responded ${res.status}: ${detail}`);
  }
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value?: string | null): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:6px 0;color:#9a9485;font-size:13px;width:170px;vertical-align:top;">${label}</td>
    <td style="padding:6px 0;color:#f5f1e8;font-size:14px;">${esc(value)}</td>
  </tr>`;
}

function notificationHtml(lead: LeadEmailData): string {
  return `<div style="background:#0e0d0b;padding:32px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#16140f;border:1px solid #2a2720;border-radius:16px;padding:32px;">
      <p style="margin:0 0 4px;color:#8b5cf6;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Filo Diretto</p>
      <h1 style="margin:0 0 24px;color:#f5f1e8;font-size:22px;">Nuova richiesta demo</h1>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Nome", lead.name)}
        ${row("Email", lead.email)}
        ${row("Azienda", lead.company)}
        ${row("Dipendenti", lead.companySize)}
        ${row("Ruolo", lead.role)}
        ${row("Telefono", lead.phone)}
        ${row("Piano di interesse", lead.plan)}
        ${row("Messaggio", lead.message)}
      </table>
    </div>
  </div>`;
}

function confirmationHtml(lead: LeadEmailData): string {
  return `<div style="background:#0e0d0b;padding:32px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#16140f;border:1px solid #2a2720;border-radius:16px;padding:32px;">
      <p style="margin:0 0 4px;color:#8b5cf6;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Filo Diretto</p>
      <h1 style="margin:0 0 16px;color:#f5f1e8;font-size:24px;">Grazie, ${esc(lead.name)}.</h1>
      <p style="margin:0 0 16px;color:#cfc9bb;font-size:15px;line-height:1.6;">
        Abbiamo ricevuto la tua richiesta di demo per Filo Diretto. Il nostro team ti ricontatterà a breve
        all'indirizzo che ci hai indicato per organizzare una presentazione su misura per ${esc(lead.company)}.
      </p>
      <p style="margin:0 0 24px;color:#cfc9bb;font-size:15px;line-height:1.6;">
        Nel frattempo, se hai domande puoi rispondere direttamente a questa email.
      </p>
      <p style="margin:0;color:#9a9485;font-size:13px;line-height:1.6;">
        — Il team di Filo Diretto<br/>Precise Advertising S.r.l.
      </p>
    </div>
  </div>`;
}

// Sends internal notification + applicant confirmation.
// Never throws: email failures must not break lead capture (the lead is already saved).
export async function sendLeadEmails(lead: LeadEmailData): Promise<void> {
  const results = await Promise.allSettled([
    sendViaResend({
      from: FROM_ADDRESS,
      to: NOTIFY_ADDRESS,
      reply_to: lead.email,
      subject: `Nuova richiesta demo — ${lead.company}`,
      html: notificationHtml(lead),
    }),
    sendViaResend({
      from: FROM_ADDRESS,
      to: lead.email,
      subject: "Grazie per la tua richiesta — Filo Diretto",
      html: confirmationHtml(lead),
    }),
  ]);

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      const kind = index === 0 ? "notification" : "confirmation";
      logger.error({ err: result.reason, kind }, "Failed to send lead email");
    }
  });
}
