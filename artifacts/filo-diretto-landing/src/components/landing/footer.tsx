import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 py-14 px-6 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8">
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

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/cookie" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          <Link href="/termini" className="hover:text-foreground transition-colors">Termini di Servizio</Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border/10 text-xs">
        &copy; {new Date().getFullYear()} Precise Advertising S.r.l. — Tutti i diritti riservati.
      </div>
    </footer>
  );
}
