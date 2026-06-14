import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CHANNELS = [
  { name: 'Email', rate: '<30%', note: 'Finisce nello spam, tra le newsletter.' },
  { name: 'Intranet', rate: '~15%', note: 'Nessuno la apre spontaneamente.' },
  { name: 'App aziendali', rate: '<40%', note: 'Disinstallata dopo un mese.' },
];

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 2100),
      setTimeout(() => setPhase(4), 3400),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center px-20 pt-28 pb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        className="text-purple text-sm font-semibold tracking-[0.35em] uppercase mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        01 — Il problema
      </motion.p>

      <div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[8.5vw] leading-[0.9] tracking-tight text-cream"
            initial={{ y: '110%' }}
            animate={phase >= 2 ? { y: '0%' } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            HR non ha
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[8.5vw] leading-[0.9] tracking-tight text-purple"
            initial={{ y: '110%' }}
            animate={phase >= 2 ? { y: '0%' } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            un canale.
          </motion.h1>
        </div>
      </div>

      <motion.p
        className="text-cream/55 text-2xl mt-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={phase >= 3 ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        Email, intranet, app aziendali. Tre strumenti. Nessuno funziona.
      </motion.p>

      <div className="grid grid-cols-3 gap-8 mt-16 max-w-5xl">
        {CHANNELS.map((c, i) => (
          <motion.div
            key={c.name}
            className="border-t border-cream/15 pt-6"
            initial={{ opacity: 0, y: 24 }}
            animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="text-cream/60 text-sm font-medium uppercase tracking-wider mb-4">
              {c.name}
            </div>
            <div className="font-display text-6xl text-cream/35 line-through decoration-purple/70 decoration-4">
              {c.rate}
            </div>
            <div className="text-cream/45 text-base mt-4">{c.note}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
