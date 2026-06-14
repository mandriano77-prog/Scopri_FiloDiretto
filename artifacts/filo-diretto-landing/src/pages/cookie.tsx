import LegalLayout, { LegalSection } from "@/components/legal/legal-layout";

export default function Cookie() {
  return (
    <LegalLayout title="Cookie Policy" updated="giugno 2026">
      <p>
        Questo sito utilizza esclusivamente cookie tecnici necessari al suo corretto funzionamento.
        Non viene effettuato alcun tracciamento dell'utente.
      </p>

      <LegalSection title="Cookie tecnici">
        <p>
          Il sito utilizza esclusivamente cookie tecnici indispensabili al funzionamento. Non richiedono il
          consenso dell'utente ai sensi dell'Art. 122 del Codice Privacy.
        </p>
      </LegalSection>

      <LegalSection title="Cookie di terze parti">
        <p>
          Il sito carica i font tramite Google Fonts. Google potrebbe impostare cookie tecnici per ottimizzare
          il caricamento dei font. Nessun cookie di profilazione o marketing viene utilizzato.
        </p>
      </LegalSection>

      <LegalSection title="Cookie analitici e di profilazione">
        <p>Questo sito NON utilizza cookie analitici, di profilazione o pubblicitari di alcun tipo.</p>
      </LegalSection>

      <LegalSection title="Gestione dei cookie">
        <p>
          L'utente può gestire le preferenze sui cookie dalle impostazioni del proprio browser, comprese le
          opzioni per bloccarli o eliminarli.
        </p>
      </LegalSection>

      <LegalSection title="Riferimenti normativi">
        <p>
          Regolamento UE 2016/679 (GDPR), D.Lgs. 196/2003, Provvedimento Garante Privacy 8 maggio 2014 n. 229.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
