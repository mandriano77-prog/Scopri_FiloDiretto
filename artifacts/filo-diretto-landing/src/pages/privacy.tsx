import { Link } from "wouter";
import LegalLayout, { LegalSection } from "@/components/legal/legal-layout";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="giugno 2026">
      <p>
        La presente informativa descrive le modalità di trattamento dei dati personali degli utenti che
        compilano il modulo di richiesta demo presente su questo sito, ai sensi del Regolamento UE 2016/679 (GDPR).
      </p>

      <LegalSection title="Titolare del trattamento">
        <p>
          Precise Advertising S.r.l. — Via Vittoria Colonna 54, 20149 Milano (MI) — P.IVA 13419740967.
          Per qualsiasi richiesta relativa ai dati personali è possibile scrivere a{" "}
          <a href="mailto:info@preciseadvertising.tech" className="text-primary hover:underline">info@preciseadvertising.tech</a>.
        </p>
      </LegalSection>

      <LegalSection title="Dati raccolti">
        <p>
          Attraverso il modulo di contatto raccogliamo: nome e cognome, indirizzo email aziendale, nome
          dell'azienda, numero di dipendenti e, facoltativamente, ruolo, numero di telefono, il piano di
          interesse e un messaggio. I dati sono forniti volontariamente dall'utente.
        </p>
      </LegalSection>

      <LegalSection title="Finalità del trattamento">
        <p>
          I dati personali sono trattati esclusivamente per rispondere alla richiesta di contatto, organizzare
          una demo e fornire informazioni su Filo Diretto. Non vengono utilizzati per profilazione o marketing automatizzato.
        </p>
      </LegalSection>

      <LegalSection title="Base giuridica">
        <p>Consenso dell'interessato (Art. 6, par. 1, lett. a del Regolamento UE 2016/679 — GDPR).</p>
      </LegalSection>

      <LegalSection title="Conservazione">
        <p>
          I dati raccolti vengono conservati per un massimo di 24 mesi dalla ricezione, dopodiché vengono cancellati.
        </p>
      </LegalSection>

      <LegalSection title="Destinatari dei dati">
        <p>
          I dati vengono conservati nei sistemi del Titolare e trattati esclusivamente dal personale autorizzato.
          Possono essere trattati da fornitori di servizi tecnici (ad esempio di hosting e infrastruttura), nominati
          responsabili del trattamento, per il solo funzionamento del servizio. I dati non vengono ceduti a terzi
          per finalità proprie.
        </p>
      </LegalSection>

      <LegalSection title="Diritti dell'interessato">
        <p>
          Ai sensi degli artt. 15-22 del GDPR, l'utente ha diritto di accedere, rettificare, cancellare, limitare,
          opporsi al trattamento e richiedere la portabilità dei dati. Scrivere a{" "}
          <a href="mailto:info@preciseadvertising.tech" className="text-primary hover:underline">info@preciseadvertising.tech</a>.
        </p>
      </LegalSection>

      <LegalSection title="Revoca del consenso">
        <p>
          Il consenso può essere revocato in qualsiasi momento inviando una richiesta a{" "}
          <a href="mailto:info@preciseadvertising.tech" className="text-primary hover:underline">info@preciseadvertising.tech</a>,
          senza pregiudicare la liceità del trattamento basato sul consenso prestato prima della revoca.
        </p>
      </LegalSection>

      <LegalSection title="Cookie">
        <p>
          Per informazioni sull'utilizzo dei cookie consulta la{" "}
          <Link href="/cookie" className="text-primary hover:underline">Cookie Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Autorità di controllo">
        <p>
          L'utente ha diritto di proporre reclamo al Garante per la protezione dei dati personali
          (www.garanteprivacy.it).
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
