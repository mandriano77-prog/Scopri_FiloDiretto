import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 py-14 px-6 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="font-serif italic text-sm text-primary-foreground leading-none pr-0.5">fd</span>
            </div>
            <span className="font-serif text-xl text-foreground">Filo Diretto</span>
          </div>
          <p className="leading-relaxed max-w-xs">
            La linea diretta con ogni dipendente, direttamente nel Wallet dello smartphone.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="text-foreground font-medium mb-2">Precise Advertising S.r.l.</div>
          <div>Via Vittoria Colonna 54</div>
          <div>20149 Milano (MI)</div>
          <div>P.IVA 13419740967</div>
          <div>SDI M5UXCR1 · REA 2722182</div>
        </div>

        <div className="space-y-4">
          <a href="mailto:amministrazione@preciseadvertising.tech" className="block hover:text-foreground transition-colors">
            amministrazione@preciseadvertising.tech
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-foreground transition-colors">Cookie Policy</Link>
            <Link href="/termini" className="hover:text-foreground transition-colors">Termini di Servizio</Link>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border/10 text-xs">
        &copy; {new Date().getFullYear()} Precise Advertising S.r.l. — Tutti i diritti riservati.
      </div>
    </footer>
  );
}
