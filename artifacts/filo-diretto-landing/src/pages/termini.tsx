import { Link } from "wouter";
import LegalLayout, { LegalSection } from "@/components/legal/legal-layout";

export default function Termini() {
  return (
    <LegalLayout title="Termini di Servizio" updated="giugno 2026">
      <p>
        I presenti Termini di Servizio regolano l'utilizzo di questo sito e la richiesta di informazioni o di
        una demo del servizio Filo Diretto. Utilizzando il sito l'utente accetta i termini di seguito descritti.
      </p>

      <LegalSection title="Oggetto">
        <p>
          Il sito ha finalità informativa e consente all'utente di richiedere una demo e ricevere informazioni
          su Filo Diretto, servizio di comunicazione interna offerto da Precise Advertising S.r.l.
        </p>
      </LegalSection>

      <LegalSection title="Servizio in fase beta">
        <p>
          Filo Diretto è attualmente in fase beta. Le funzionalità, i piani e i prezzi indicati sul sito hanno
          carattere puramente informativo, possono essere modificati senza preavviso e non costituiscono
          un'offerta contrattuale vincolante.
        </p>
      </LegalSection>

      <LegalSection title="Richiesta di demo">
        <p>
          L'invio del modulo di contatto non costituisce la conclusione di alcun contratto. Precise Advertising
          S.r.l. si riserva la facoltà di dare seguito o meno alle richieste ricevute e di ricontattare l'utente
          per fornire le informazioni richieste.
        </p>
      </LegalSection>

      <LegalSection title="Proprietà intellettuale">
        <p>
          Il marchio "Filo Diretto", i contenuti, i testi, la grafica e gli altri elementi del sito sono di
          proprietà di Precise Advertising S.r.l. e sono protetti dalle leggi vigenti. Ne è vietata la
          riproduzione senza autorizzazione.
        </p>
      </LegalSection>

      <LegalSection title="Limitazione di responsabilità">
        <p>
          Il sito è fornito "così com'è". Precise Advertising S.r.l. non garantisce la disponibilità continua e
          ininterrotta del servizio e, nei limiti consentiti dalla legge, non risponde di eventuali danni
          indiretti derivanti dall'utilizzo del sito.
        </p>
      </LegalSection>

      <LegalSection title="Trattamento dei dati">
        <p>
          Il trattamento dei dati personali forniti tramite il sito è disciplinato dalla{" "}
          <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Legge applicabile e foro competente">
        <p>
          I presenti Termini sono regolati dalla legge italiana. Per ogni controversia sarà competente in via
          esclusiva il Foro di Milano.
        </p>
      </LegalSection>

      <LegalSection title="Modifiche">
        <p>
          Precise Advertising S.r.l. si riserva di modificare in qualsiasi momento i presenti Termini. La
          versione aggiornata è quella pubblicata su questa pagina.
        </p>
      </LegalSection>

      <LegalSection title="Contatti">
        <p>
          Per qualsiasi richiesta è possibile scrivere a{" "}
          <a href="mailto:amministrazione@preciseadvertising.tech" className="text-primary hover:underline">amministrazione@preciseadvertising.tech</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
