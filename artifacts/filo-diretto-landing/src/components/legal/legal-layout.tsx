import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/landing/footer";

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-foreground font-serif text-2xl mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export default function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  useEffect(() => {
    document.title = `${title} | Filo Diretto`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-[100dvh] bg-background flex flex-col">
      <nav className="px-6 py-4 flex items-center justify-between border-b border-border/10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="font-serif italic text-lg text-primary-foreground leading-none pr-0.5">fd</span>
          </div>
          <span className="font-serif text-2xl tracking-tight text-foreground">Filo Diretto</span>
        </Link>
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Torna alla home
        </Link>
      </nav>

      <main className="flex-1 px-6 py-16">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">{title}</h1>
          <p className="text-sm text-muted-foreground mb-12">Ultimo aggiornamento: {updated}</p>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
