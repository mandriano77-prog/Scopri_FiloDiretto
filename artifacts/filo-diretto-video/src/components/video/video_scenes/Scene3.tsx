import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import dashboardPng from '@assets/filo_ref/dashboard.png';

const STEPS = [
  { n: '1', t: 'Import', d: 'HR carica un CSV: nome, email, reparto, compleanno.' },
  { n: '2', t: 'Invio', d: 'Ogni dipendente riceve un link. Un tap, pass nel wallet.' },
  { n: '3', t: 'Attivo', d: 'Push sulla lock screen, automazioni partite.' },
  { n: '4', t: 'Misura', d: 'Dashboard: install rate, letture, partecipazione.' },
];

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3400),
      setTimeout(() => setPhase(5), 4600),
      setTimeout(() => setPhase(6), 5800),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center gap-16 px-20 pt-28 pb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-[42%] flex flex-col">
        <motion.p
          className="text-purple text-sm font-semibold tracking-[0.35em] uppercase mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          02 — Come funziona
        </motion.p>

        <div className="mb-10">
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-[5vw] leading-[0.95] tracking-tight text-cream"
              initial={{ y: '110%' }}
              animate={phase >= 2 ? { y: '0%' } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              HR carica.
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-[5vw] leading-[0.95] tracking-tight text-cream"
              initial={{ y: '110%' }}
              animate={phase >= 2 ? { y: '0%' } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Il resto è <span className="text-purple">automatico.</span>
            </motion.h2>
          </div>
        </div>

        <div className="space-y-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className="flex gap-5 items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={phase >= 3 + i ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45 }}
            >
              <div className="font-display text-3xl text-purple w-9 shrink-0 leading-none">{s.n}</div>
              <div>
                <div className="text-cream text-lg font-semibold">{s.t}</div>
                <div className="text-cream/50 text-base">{s.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="flex-1 relative"
        initial={{ opacity: 0, x: 60 }}
        animate={phase >= 1 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute -inset-6 bg-purple/15 blur-3xl rounded-[2rem]" />
        <div className="relative rounded-2xl overflow-hidden border border-cream/12 shadow-2xl bg-ink-soft">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-cream/10">
            <span className="w-3 h-3 rounded-full bg-cream/20" />
            <span className="w-3 h-3 rounded-full bg-cream/20" />
            <span className="w-3 h-3 rounded-full bg-cream/20" />
            <span className="ml-3 text-cream/40 text-xs">filodiretto.app/dashboard</span>
          </div>
          <img
            src={dashboardPng}
            alt="Dashboard HR"
            className="w-full block max-h-[60vh] object-cover object-top"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
