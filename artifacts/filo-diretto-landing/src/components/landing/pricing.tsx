import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    id: "SCALEUP",
    name: "SCALEUP",
    dipendenti: "50 – 300 dipendenti",
    price: "€1.490",
    period: "/ mese",
    highlighted: false,
    includes: [
      "Setup €0 incluso",
      "Costo per dipendente €0 incluso",
      "Include: tutto il prodotto"
    ],
    cta: "Inizia ora"
  },
  {
    id: "MID-MARKET",
    name: "MID-MARKET",
    dipendenti: "301 – 800 dipendenti",
    price: "€2.790",
    period: "/ mese",
    highlighted: false,
    includes: [
      "Setup €0 incluso",
      "Extra incluso: SSO",
      "multi-sede",
      "dashboard advanced",
      "Include: tutto il prodotto"
    ],
    cta: "Inizia ora"
  },
  {
    id: "LARGE",
    name: "LARGE",
    dipendenti: "801 – 2.500 dipendenti",
    price: "€5.990",
    period: "/ mese",
    highlighted: false,
    includes: [
      "Setup €0 incluso",
      "Extra incluso: DPIA",
      "multi-lingua",
      "HRIS",
      "CSM dedicato",
      "Include: tutto il prodotto"
    ],
    cta: "Inizia ora"
  },
  {
    id: "ENTERPRISE",
    name: "ENTERPRISE",
    dipendenti: ">2.500 dipendenti",
    price: "Su misura",
    period: "",
    highlighted: false,
    includes: [
      "SLA garantita",
      "Opzione on-premise",
      "Integrazioni custom",
      "Supporto tecnico H24"
    ],
    cta: "Contattaci"
  }
];

export default function Pricing() {
  const handleSelectPlan = (planId: string) => {
    // We can use a custom event or query param to pass the plan to the lead form
    // Since everything is on one page, we'll just dispatch an event and scroll
    const event = new CustomEvent('select-plan', { detail: planId });
    window.dispatchEvent(event);
    document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-7xl font-serif">Piani chiari, <span className="text-primary italic">valore reale.</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nessun costo nascosto per dipendente. Un canone mensile flat che include l'intero potenziale della piattaforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 border ${
                tier.highlighted 
                  ? "bg-card border-primary shadow-2xl shadow-primary/20 scale-105 z-10" 
                  : "bg-background border-border/50 hover:border-border"
              }`}
            >
              <div className="mb-8">
                <h3 className="font-serif text-2xl mb-1">{tier.name}</h3>
                <div className="text-sm text-muted-foreground mb-6">{tier.dipendenti}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {tier.includes.map((feature, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className={`h-5 w-5 shrink-0 ${tier.highlighted ? "text-primary" : "text-muted-foreground/50"}`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.highlighted ? "default" : "outline"} 
                className={`w-full rounded-full h-12 ${tier.highlighted ? "bg-primary hover:bg-primary/90" : "border-border/50 hover:bg-muted"}`}
                onClick={() => handleSelectPlan(tier.id)}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
