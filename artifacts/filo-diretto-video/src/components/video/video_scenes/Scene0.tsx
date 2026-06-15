import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene0() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 167),
      setTimeout(() => setPhase(2), 667),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2333),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-24 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        className="text-purple/80 text-lg font-semibold tracking-[0.2em] uppercase mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        01 — Le persone
      </motion.p>

      <div className="mb-10">
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-display text-[clamp(60px,7vw,96px)] leading-[1.05] pb-2 text-cream"
            initial={{ y: '100%' }}
            animate={phase >= 2 ? { y: '0%' } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Oggi al centro
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[clamp(60px,7vw,96px)] leading-[1.05] pb-2 text-purple italic"
            initial={{ y: '100%' }}
            animate={phase >= 3 ? { y: '0%' } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            ci sono le persone.
          </motion.h1>
        </div>
      </div>

      <motion.p
        className="text-cream/80 text-3xl leading-relaxed max-w-3xl font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Le Risorse Umane non sono più solo amministrazione. Sono il cuore
        strategico dell'azienda moderna: cultura, ascolto, relazione.
      </motion.p>
    </motion.div>
  );
}
