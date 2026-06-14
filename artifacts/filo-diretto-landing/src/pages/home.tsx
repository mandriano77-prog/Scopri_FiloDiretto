import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Lock, BarChart3, Smartphone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/landing/lead-form";
import Pricing from "@/components/landing/pricing";

export default function Home() {
  useEffect(() => {
    document.title = "Filo Diretto | La linea diretta con i tuoi dipendenti";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Raggiungi ogni dipendente, ovunque si trovi. Zero app da scaricare. Comunicazioni interne, notifiche push e convenzioni aziendali direttamente nel Wallet dello smartphone.");
    }
  }, []);

  return (
    <div className="min-h-[100dvh] bg-background overflow-hidden selection:bg-primary/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between mix-blend-difference bg-background/5 backdrop-blur-md border-b border-border/10">
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
        <Button variant="default" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground border-none font-medium px-6" onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}>
          Inizia ora
        </Button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-60"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-8 relative z-10"
          >
            <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/10 text-primary-foreground/90 px-4 py-1.5 text-sm uppercase tracking-widest">
              L'evoluzione della comunicazione interna
            </Badge>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
              Il filo <span className="text-primary italic">diretto</span> con la tua azienda.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Raggiungi il 100% della tua forza lavoro. Anche chi non ha una scrivania, senza far scaricare l'ennesima app. Tutto tramite il Wallet dello smartphone.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground border-none group" onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}>
                Scopri come funziona
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-border/50 hover:bg-muted" onClick={() => document.getElementById('soluzione')?.scrollIntoView({ behavior: 'smooth' })}>
                Guarda il video
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Video / Soluzione */}
        <section id="soluzione" className="py-24 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden border border-border/30 bg-card/50 backdrop-blur-sm p-2 md:p-4 shadow-2xl shadow-primary/10"
            >
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black relative group">
                <iframe 
                  src="/video/" 
                  className="w-full h-full border-0" 
                  allow="fullscreen" 
                  title="Presentazione Filo Diretto"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problema / Features */}
        <section id="vantaggi" className="py-32 px-6 bg-card border-y border-border/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl leading-none">
                  L'email è morta. <br/>
                  <span className="text-muted-foreground italic font-serif">Viva il Wallet.</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Le comunicazioni aziendali tradizionali non raggiungono i dipendenti frontline. Le email vengono ignorate, le app aziendali non vengono scaricate. Il risultato? Un team disconnesso.
                </p>
                
                <div className="space-y-6 pt-4">
                  {[
                    { icon: Smartphone, title: "Zero App da installare", desc: "Il pass si aggiunge con un tap all'Apple Wallet o Google Wallet." },
                    { icon: Lock, title: "Notifiche in lock-screen", desc: "Comunica urgenze, turni o novità direttamente sulla schermata di blocco." },
                    { icon: BarChart3, title: "Analytics misurabili", desc: "Scopri chi legge cosa. Tassi di apertura tracciati con precisione." },
                    { icon: MapPin, title: "Convenzioni geolocalizzate", desc: "Il pass avvisa il dipendente quando si trova vicino a un partner convenzionato." }
                  ].map((feat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="mt-1 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <feat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-1">{feat.title}</h3>
                        <p className="text-muted-foreground">{feat.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                {/* Abstract mock or shapes */}
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-tr from-primary/20 via-card to-secondary border border-border/50 p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                  
                  <div className="relative z-10 w-[280px] h-[580px] bg-black rounded-[40px] border-[8px] border-secondary shadow-2xl overflow-hidden flex flex-col">
                    {/* Mockup screen */}
                    <div className="h-20 bg-background/90 backdrop-blur border-b border-border/50 flex items-center px-6">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif italic text-xl">fd</div>
                      <div className="ml-4">
                        <div className="text-sm font-medium">Filo Diretto Pass</div>
                        <div className="text-xs text-muted-foreground">Apple Wallet</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-b from-primary/20 to-background p-6 flex flex-col gap-4">
                      <div className="w-full h-32 rounded-2xl bg-card border border-border/50 p-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 mb-4"></div>
                        <div className="w-3/4 h-3 bg-muted rounded-full mb-2"></div>
                        <div className="w-1/2 h-3 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-full h-24 rounded-2xl bg-card border border-border/50 p-4 opacity-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <Pricing />

        {/* Lead Form Section */}
        <section id="contatti" className="py-32 px-6 relative">
          <div className="max-w-4xl mx-auto bg-card border border-border/30 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-4xl md:text-5xl leading-tight">
                  Pronto a connettere il tuo team?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Lascia i tuoi dati. Ti contatteremo per una demo personalizzata della piattaforma.
                </p>
                
                <div className="space-y-4 pt-8 border-t border-border/50">
                  <div className="text-sm text-muted-foreground">
                    "Da quando usiamo Filo Diretto, abbiamo raggiunto il 98% dei nostri operai sul territorio."
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary"></div>
                    <div>
                      <div className="font-medium text-sm">Direttore HR</div>
                      <div className="text-xs text-muted-foreground">Azienda Manifatturiera</div>
                    </div>
                  </div>
                </div>
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
