import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, BarChart3, Smartphone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/landing/lead-form";
import Pricing from "@/components/landing/pricing";
import promoVideo from "@assets/Filo_Diretto_def_1781470766344.mp4";

const benefits = [
  { icon: Smartphone, title: "Zero app da installare", desc: "Il pass si aggiunge con un tap all'Apple Wallet o Google Wallet." },
  { icon: Lock, title: "Notifiche in lock-screen", desc: "Comunica urgenze, turni o novità direttamente sulla schermata di blocco." },
  { icon: BarChart3, title: "Analytics misurabili", desc: "Scopri chi legge cosa. Tassi di apertura tracciati con precisione." },
  { icon: MapPin, title: "Convenzioni geolocalizzate", desc: "Il pass avvisa il dipendente quando è vicino a un partner convenzionato." },
];

export default function Home() {
  useEffect(() => {
    document.title = "Filo Diretto | La linea diretta con i tuoi dipendenti";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Raggiungi ogni dipendente, ovunque si trovi. Zero app da scaricare. Comunicazioni interne, notifiche push e convenzioni aziendali direttamente nel Wallet dello smartphone.");
    }
  }, []);

  const scrollToContatti = () => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-[100dvh] bg-background overflow-hidden selection:bg-primary/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="font-serif italic text-lg text-primary-foreground leading-none pr-0.5">fd</span>
          </div>
          <span className="font-serif text-2xl tracking-tight">Filo Diretto</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#soluzione" className="hover:text-foreground transition-colors">La Soluzione</a>
          <a href="#vantaggi" className="hover:text-foreground transition-colors">Vantaggi</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Prezzi</a>
        </div>
        <Button variant="default" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground border-none font-medium px-6" onClick={scrollToContatti}>
          Richiedi una demo
        </Button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-8 relative z-10"
          >
            <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/10 text-primary-foreground/90 px-4 py-1.5 text-sm uppercase tracking-widest">
              Comunicazione interna · fase beta
            </Badge>

            <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-tight">
              Il filo <span className="text-primary italic">diretto</span> con la tua azienda.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Raggiungi il 100% della tua forza lavoro. Anche chi non ha una scrivania, senza far scaricare l'ennesima app. Tutto tramite il Wallet dello smartphone.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground border-none group" onClick={scrollToContatti}>
                Richiedi una demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-border/50 hover:bg-muted" onClick={() => document.getElementById('soluzione')?.scrollIntoView({ behavior: 'smooth' })}>
                Guarda il video
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Video / Soluzione */}
        <section id="soluzione" className="pb-24 px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border/30 bg-black">
              <video
                src={promoVideo}
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video block"
              />
            </div>
          </div>
        </section>

        {/* Vantaggi */}
        <section id="vantaggi" className="py-28 px-6 bg-card border-y border-border/20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-16">
              <h2 className="text-5xl md:text-6xl leading-none mb-6">
                L'email è morta. <span className="text-muted-foreground italic font-serif">Viva il Wallet.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Le comunicazioni tradizionali non raggiungono i dipendenti frontline: le email vengono ignorate, le app aziendali non vengono scaricate. Il Wallet, invece, ce l'hanno già tutti.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-border/40 bg-background p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <feat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{feat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <Pricing />

        {/* Lead Form Section */}
        <section id="contatti" className="py-28 px-6">
          <div className="max-w-4xl mx-auto bg-card border border-border/30 rounded-3xl p-8 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-4xl md:text-5xl leading-tight">
                  Pronto a connettere il tuo team?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Siamo in fase beta e stiamo selezionando le prime aziende. Lascia i tuoi dati: ti ricontattiamo per una demo personalizzata.
                </p>

                <ul className="space-y-3 pt-6 border-t border-border/50 text-sm text-muted-foreground">
                  <li>Setup gratuito e onboarding assistito</li>
                  <li>Nessuna app da far installare ai dipendenti</li>
                  <li>Nessun impegno: prima una demo, poi decidi</li>
                </ul>
              </div>

              <div className="md:col-span-3">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t border-border/20 py-12 px-6 text-center text-muted-foreground text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
              <span className="font-serif italic text-xs text-foreground leading-none pr-0.5">fd</span>
            </div>
            <span className="font-medium">Filo Diretto S.r.l.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Cookie Policy</a>
            <a href="#" className="hover:text-foreground">Termini di Servizio</a>
          </div>
          <div>&copy; {new Date().getFullYear()} Tutti i diritti riservati.</div>
        </div>
      </footer>
    </div>
  );
}
