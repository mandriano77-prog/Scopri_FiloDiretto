import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import dashboardPng from '@assets/filo_ref/dashboard.png';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 5000),
      setTimeout(() => setPhase(4), 8000),
      setTimeout(() => setPhase(5), 11000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center"
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full flex px-16 items-center gap-12">
        <div className="flex-1 z-10">
          <motion.p
            className="text-primary-light text-xl font-medium tracking-widest uppercase mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            Semplicità per le HR
          </motion.p>
          <motion.h2
            className="text-[4vw] font-bold tracking-tight leading-[1.1] mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Aggiungi un dipendente<br/>in pochi secondi.
          </motion.h2>
          <motion.div
            className="space-y-6 mt-12"
            initial={{ opacity: 0 }}
            animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          >
            {[
              { num: '1', text: 'Inserisci i dati' },
              { num: '2', text: 'Genera il pass digitale' },
              { num: '3', text: 'Invia il link' }
            ].map((step, i) => (
              <motion.div 
                key={step.num}
                className="flex items-center gap-4 text-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={phase >= (3 + i) ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center font-bold text-primary-light">
                  {step.num}
                </div>
                <span>{step.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, x: 100, rotateY: 20 }}
          animate={phase >= 1 ? { opacity: 1, x: 0, rotateY: -5 } : { opacity: 0, x: 100, rotateY: 20 }}
          transition={{ duration: 1.2, type: "spring", damping: 20 }}
          style={{ perspective: 1000 }}
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-[2rem] transform -translate-x-4 translate-y-4" />
          <img 
            src={dashboardPng} 
            alt="HR Dashboard" 
            className="relative z-10 w-full rounded-2xl border border-white/10 shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
