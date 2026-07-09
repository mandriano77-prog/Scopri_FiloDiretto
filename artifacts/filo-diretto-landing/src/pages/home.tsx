import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/landing/lead-form";
import Pricing from "@/components/landing/pricing";
import Footer from "@/components/landing/footer";
import Logo from "@/components/landing/logo";
import promoVideo from "@assets/filo-diretto-promo-hd.mp4";
import promoPoster from "@assets/filo-diretto-poster.jpg";
import imgDashboard from "@assets/fd-dashboard.jpg";
import imgConvenzioni from "@assets/fd-convenzioni.jpg";
import imgGrowth from "@assets/fd-growth.jpg";
import imgWallet from "@assets/fd-wallet.jpg";
import imgNotifiche from "@assets/fd-notifiche.jpg";
import imgPersone from "@assets/fd-persone.jpg";

const pillars = [
  {
    verb: "Parla",
    tag: "Comunicazione HR",
    title: "Comunichi e sai chi ha letto",
    desc: "Invii dalla dashboard, segmenti per sede o reparto e la push arriva sulla schermata di blocco. Fino al 95% di lettura, con la conferma di chi ha ricevuto.",
    points: ["Segmentazione per sede e reparto", "Conferme di lettura in tempo reale", "Automazioni"],
    img: imgDashboard,
    alt: "Dashboard di Filo Diretto con tasso di lettura e ultime comunicazioni",
  },
  {
    verb: "Attiva",
    tag: "Hub Convenzioni",
    title: "Welfare che si sente",
    desc: "Un hub di convenzioni online e fisiche, con sconti geolocalizzati che il dipendente attiva direttamente dal pass, ovunque si trovi.",
    points: ["Convenzioni online e fisiche", "Sconti geolocalizzati", "Attivazione dal pass"],
    img: imgConvenzioni,
    alt: "Marketplace delle convenzioni nel pass Filo Diretto",
  },
  {
    verb: "Fa crescere",
    tag: "People Growth",
    title: "Le persone crescono con te",
    desc: "Ogni azione vale coin che diventano carriera: dieci esperienze di crescita, dal mentoring con il management alla formazione. L'engagement che diventa percorso.",
    points: ["Coin per ogni azione", "10 esperienze di crescita", "Mentoring, formazione, coaching"],
    img: imgGrowth,
    alt: "Coin balance e marketplace growth nel pass Filo Diretto",
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

const results = [
  { pre: "fino a", value: "98%", label: "Tasso di lettura" },
  { pre: "fino a", value: "4x", label: "Engagement reale" },
  { pre: "", value: "100%", label: "Reward erogati in automatico" },
];

export default function Home() {
  useEffect(() => {
    document.title = "Filo Diretto | La linea diretta con i tuoi dipendenti";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Raggiungi ogni dipendente, ovunque si trovi. Zero app da scaricare. Comunicazioni interne, welfare e crescita delle persone in un unico pass nel Wallet dello smartphone.");
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
          <a href="#cosa-fa" className="hover:text-foreground transition-colors">Cosa fa</a>
          <a href="#come-funziona" className="hover:text-foreground transition-colors">Come funziona</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Prezzi</a>
        </div>
        <Button variant="default" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground border-none font-medium px-6" onClick={scrollToContatti}>
          Richiedi una demo
        </Button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
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
              Comunicazioni interne, welfare e crescita delle persone in un unico pass nel Wallet. Raggiungi ogni dipendente, ovunque lavori. Nessuna app da installare.
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

        {/* Le persone al centro — anima del prodotto */}
        <section id="persone" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-7">
                  Le persone al centro
                </div>
                <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-8">
                  Oggi al centro ci sono <span className="text-primary italic">le persone.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Le Risorse Umane non sono più solo amministrazione: sono il cuore strategico dell'azienda, fatto di cultura, ascolto e relazione. Filo Diretto trasforma le comunicazioni interne in coinvolgimento vero, quello che fa sentire ogni persona parte dell'azienda e la fa crescere insieme a te.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden border border-border/30">
                <img src={imgPersone} alt="Una persona usa il proprio pass Filo Diretto dallo smartphone" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {results.map((r) => (
                <div key={r.label} className="rounded-2xl border border-border/40 bg-card p-8 text-center">
                  {r.pre && (
                    <div className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-1">
                      {r.pre}
                    </div>
                  )}
                  <div className="font-serif text-5xl text-primary mb-2">{r.value}</div>
                  <div className="text-sm text-muted-foreground">{r.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground/60">
              Valori di riferimento del modello Filo Diretto, non garantiti.
            </p>
          </div>
        </section>

        {/* Problema + Casi d'uso */}
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
            <div className="flex flex-wrap gap-3">
              {useCases.map((uc) => (
                <span
                  key={uc}
                  className="rounded-full border border-border/50 bg-background px-4 py-2 text-sm text-muted-foreground"
                >
                  {uc}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Cosa fa — il pass che fa tre cose: Parla, Attiva, Fa crescere */}
        <section id="cosa-fa" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-20">
              <div className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-7">
                Il pass che fa tre cose
              </div>
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">
                Parla. Attiva. <span className="text-primary italic">Fa crescere.</span>
              </h2>
            </div>

            <div className="space-y-20 md:space-y-28">
              {pillars.map((feat, i) => (
                <motion.div
                  key={feat.verb}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
                >
                  <div className={`rounded-2xl overflow-hidden border border-border/30 bg-background p-4 flex justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <img src={feat.img} alt={feat.alt} className="block max-h-[460px] w-auto rounded-lg" />
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="font-serif text-3xl md:text-4xl text-primary italic">{feat.verb}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{feat.tag}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-5">{feat.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed font-light mb-7">{feat.desc}</p>
                    <ul className="flex flex-wrap gap-2">
                      {feat.points.map((p) => (
                        <li key={p} className="rounded-full border border-border/50 bg-background px-3 py-1.5 text-sm text-muted-foreground">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nel Wallet, zero app */}
        <section className="py-28 px-6 bg-card border-y border-border/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-7">
                  Nel Wallet, senza app
                </div>
                <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-6">
                  Un solo pass. <span className="text-primary italic">Zero app.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Badge aziendale, notifiche e convenzioni vivono nell'Apple o Google Wallet che il dipendente ha già. Le comunicazioni importanti arrivano sulla schermata di blocco, dove è impossibile ignorarle. Niente da scaricare, niente password.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-border/30 bg-card">
                  <img src={imgWallet} alt="Il pass Filo Diretto nel Wallet dello smartphone" className="w-full block" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-border/30 bg-card">
                  <img src={imgNotifiche} alt="Notifiche di Filo Diretto sulla schermata di blocco" className="w-full block" />
                </div>
              </div>
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

        {/* Video demo */}
        <section id="soluzione" className="py-28 px-6 relative z-10 bg-card border-y border-border/20">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mb-12">
              <div className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-7">
                Guardalo in azione
              </div>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
                Un minuto per capire <span className="text-primary italic">come funziona.</span>
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/30 bg-black shadow-2xl shadow-primary/10">
              <video
                ref={videoRef}
                src={promoVideo}
                poster={promoPoster}
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
