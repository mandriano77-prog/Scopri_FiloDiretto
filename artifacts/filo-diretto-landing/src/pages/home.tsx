import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, BarChart3, Smartphone, MapPin, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/landing/lead-form";
import Pricing from "@/components/landing/pricing";
import Footer from "@/components/landing/footer";
import Logo from "@/components/landing/logo";
import promoVideo from "@assets/filo-diretto-promo-hd.mp4";

const pillars = [
  {
    icon: BarChart3,
    title: "Comunichi e sai chi ha letto",
    desc: "Invii dalla dashboard, segmenti per sede o reparto e vedi in tempo reale consegne e tasso di lettura. Basta email che nessuno apre.",
  },
  {
    icon: Smartphone,
    title: "Un solo pass, non l'ennesima app",
    desc: "Badge aziendale con NFC e QR e notifiche sulla schermata di blocco: tutto nell'Apple o Google Wallet che il dipendente ha già.",
  },
  {
    icon: MapPin,
    title: "Vantaggi che si sentono",
    desc: "Convenzioni geolocalizzate: il pass avvisa il dipendente quando è vicino a un partner con uno sconto dedicato.",
  },
];

const steps = [
  {
    n: "01",
    title: "Crei e segmenti",
    desc: "Scrivi la comunicazione dalla dashboard e scegli chi la riceve: tutta l'azienda, una sede o un singolo reparto.",
  },
  {
    n: "02",
    title: "Arriva nel Wallet",
    desc: "Il dipendente la riceve sulla schermata di blocco, dentro il pass che ha già aggiunto. Nessuna app da aprire.",
  },
  {
    n: "03",
    title: "Misuri il risultato",
    desc: "Consegne e tasso di lettura in tempo reale. Sai davvero chi ha ricevuto e chi ha letto.",
  },
];

const useCases = [
  "Chiusura uffici",
  "Policy smart working",
  "Manutenzione IT",
  "Turni e reperibilità",
  "Comunicazioni di sede",
  "Onboarding nuovi assunti",
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

  const videoRef = useRef<HTMLVideoElement>(null);
  const enterFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    void v.play().catch(() => {});
    const anyV = v as HTMLVideoElement & {
      webkitRequestFullscreen?: () => void;
      webkitEnterFullscreen?: () => void;
    };
    try {
      if (v.requestFullscreen) {
        void v.requestFullscreen().catch(() => {});
      } else if (anyV.webkitRequestFullscreen) {
        anyV.webkitRequestFullscreen();
      } else if (anyV.webkitEnterFullscreen) {
        anyV.webkitEnterFullscreen();
      }
    } catch {
      /* native controls remain as fallback */
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background overflow-hidden selection:bg-primary/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/10">
        <Logo />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#soluzione" className="hover:text-foreground transition-colors">La Soluzione</a>
          <a href="#vantaggi" className="hover:text-foreground transition-colors">Vantaggi</a>
          <a href="#come-funziona" className="hover:text-foreground transition-colors">Come funziona</a>
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
            <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-tight">
              Il filo <span className="text-primary italic">diretto</span> con la tua azienda.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Comunicazioni interne, badge aziendale e convenzioni in un unico pass nel Wallet. Raggiungi ogni dipendente, ovunque lavori. Nessuna app da installare.
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
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border/30 bg-black shadow-2xl shadow-primary/10">
              <video
                ref={videoRef}
                src={promoVideo}
                controls
                preload="metadata"
                aria-label="Video esplicativo Filo Diretto"
                className="w-full aspect-video block"
              />
            </div>
            <div className="flex justify-center mt-6">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-7 text-base border-border/50 hover:bg-muted"
                onClick={enterFullscreen}
              >
                <Maximize2 className="mr-2 h-5 w-5" />
                Guarda a schermo intero
              </Button>
            </div>
          </div>
        </section>

        {/* Problema + Casi d'uso + Soluzione */}
        <section id="vantaggi" className="py-28 px-6 bg-card border-y border-border/20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-12">
              <div className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-7">
                Il problema
              </div>
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-7">
                Le comunicazioni interne non arrivano <span className="text-primary italic">a tutti.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Le comunicazioni tradizionali non raggiungono i dipendenti frontline: le email vengono ignorate, le app aziendali non vengono scaricate. Il Wallet, invece, ce l'hanno già tutti.
              </p>
            </div>

            {/* Casi d'uso */}
            <div className="flex flex-wrap gap-3 mb-24">
              {useCases.map((uc) => (
                <span
                  key={uc}
                  className="rounded-full border border-border/50 bg-background px-4 py-2 text-sm text-muted-foreground"
                >
                  {uc}
                </span>
              ))}
            </div>

            {/* La soluzione — 3 pilastri */}
            <div className="max-w-2xl mb-14">
              <div className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-7">
                La soluzione
              </div>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
                Tutto quello che serve, <span className="text-primary italic">in un pass.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-border/40 bg-background p-8"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <feat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{feat.title}</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Come funziona */}
        <section id="come-funziona" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-16">
              <div className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-7">
                Come funziona
              </div>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
                Dalla dashboard alla tasca del dipendente <span className="text-primary italic">in tre passi.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="font-serif text-5xl text-primary/40 mb-4">{s.n}</div>
                  <h3 className="text-xl font-medium mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{s.desc}</p>
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

      <Footer />
    </div>
  );
}
