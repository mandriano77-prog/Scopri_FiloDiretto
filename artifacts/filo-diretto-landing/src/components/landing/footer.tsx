import { Link } from "wouter";
import Logo from "@/components/landing/logo";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 py-14 px-6 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="space-y-3">
          <Logo iconClassName="w-7 h-7" textClassName="text-xl" />
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
