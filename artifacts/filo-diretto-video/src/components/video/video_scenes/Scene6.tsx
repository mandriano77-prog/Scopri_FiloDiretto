import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const STATS = [
  { v: '95%+', l: 'Lettura push' },
  { v: 'Zero', l: 'App da scaricare' },
  { v: '5×', l: 'Risposte vs email' },
];

const AUTOS = ['Compleanni', 'Anniversari', 'Reminder', 'Quiz compliance', 'Survey lampo', 'Onboarding'];

export function Scene6() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 2400),
      setTimeout(() => setPhase(4), 3600),
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
        className="text-purple text-sm font-semibold tracking-[0.35em] uppercase mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        05 — I risultati
      </motion.p>

      <div className="mb-14">
        <div className="overflow-hidden">
          <motion.h2
            className="font-display text-[6vw] leading-[0.92] tracking-tight text-cream"
            initial={{ y: '110%' }}
            animate={phase >= 1 ? { y: '0%' } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Engagement reale. <span className="text-purple">Tutto misurato.</span>
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-12 max-w-5xl">
        {STATS.map((s, i) => (
          <motion.div
            key={s.l}
            className="border-t border-cream/15 pt-6"
            initial={{ opacity: 0, y: 28 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-display text-8xl text-cream leading-none">{s.v}</div>
            <div className="text-cream/50 text-sm uppercase tracking-widest mt-4">{s.l}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={phase >= 3 ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="text-cream/40 text-xs uppercase tracking-[0.3em] mb-4">Automazioni attive</div>
        <div className="flex flex-wrap gap-3">
          {AUTOS.map((a, i) => (
            <motion.span
              key={a}
              className="px-4 py-2 rounded-full border border-cream/15 text-cream/80 text-base"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={phase >= 3 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              {a}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
