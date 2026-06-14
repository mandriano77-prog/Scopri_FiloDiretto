import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NOTIFS = [
  {
    when: 'ora',
    title: 'Ufficio chiuso domani',
    body: 'Allerta meteo arancione. Domani smart working per tutti. Buon lavoro da casa!',
  },
  {
    when: '8:00',
    title: 'Buon compleanno Laura!',
    body: 'Il team ti aspetta in sala break alle 12:30. C’è una sorpresa 🎉',
  },
  {
    when: 'ieri',
    title: 'Ferie: 3 giorni da pianificare',
    body: 'Hai 3 giorni residui da usare entro il 30 giugno. Pianifica ora.',
  },
];

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1900),
      setTimeout(() => setPhase(4), 2800),
      setTimeout(() => setPhase(5), 3700),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center gap-20 px-24 pt-28 pb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-[46%]">
        <motion.p
          className="text-purple text-sm font-semibold tracking-[0.35em] uppercase mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          04 — Le push
        </motion.p>

        <div className="mb-8">
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-[6.5vw] leading-[0.88] tracking-tight text-cream"
              initial={{ y: '110%' }}
              animate={phase >= 1 ? { y: '0%' } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              HR parla.
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-[6.5vw] leading-[0.88] tracking-tight text-purple"
              initial={{ y: '110%' }}
              animate={phase >= 1 ? { y: '0%' } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Tutti leggono.
            </motion.h2>
          </div>
        </div>

        <motion.p
          className="text-cream/55 text-xl max-w-lg"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Ogni messaggio arriva sulla lock screen. Come un messaggio, non come un’email.
        </motion.p>

        <motion.div
          className="flex items-baseline gap-3 mt-10 border-t border-cream/15 pt-6"
          initial={{ opacity: 0, y: 16 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="font-display text-7xl text-cream leading-none">95%+</span>
          <span className="text-cream/50 text-sm uppercase tracking-widest">tasso di lettura</span>
        </motion.div>
      </div>

      {/* Phone lock screen */}
      <motion.div
        className="relative w-[320px] h-[660px] shrink-0 rounded-[3rem] border-[10px] border-[#1a1a1a] shadow-2xl overflow-hidden"
        initial={{ opacity: 0, x: 60 }}
        animate={phase >= 1 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#241b3a] via-[#140f22] to-black" />
        <div className="absolute top-0 inset-x-0 flex justify-center pt-3 z-20">
          <div className="w-28 h-7 bg-black rounded-full" />
        </div>

        {/* clock */}
        <div className="absolute top-16 inset-x-0 text-center">
          <div className="text-cream/70 text-sm">venerdì 12 giugno</div>
          <div className="text-cream text-7xl font-extralight tracking-tight">9:41</div>
        </div>

        {/* notifications */}
        <div className="absolute top-52 inset-x-3 space-y-3">
          {NOTIFS.map((n, i) => (
            <motion.div
              key={n.title}
              className="rounded-2xl bg-cream/12 backdrop-blur-xl border border-cream/10 p-3.5"
              initial={{ opacity: 0, y: -16, scale: 0.95 }}
              animate={phase >= 3 + i ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 rounded-md bg-purple flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-sm bg-cream" />
                </div>
                <span className="text-cream/90 text-xs font-semibold flex-1">HR · Acme Corp</span>
                <span className="text-cream/45 text-[10px]">{n.when}</span>
              </div>
              <div className="text-cream text-sm font-semibold leading-tight">{n.title}</div>
              <div className="text-cream/70 text-xs mt-1 leading-snug">{n.body}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
