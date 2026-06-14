import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const POINTS = [
  'Apple Wallet + Google Wallet',
  'Funziona anche offline',
  'QR / NFC: fa anche da badge',
];

export function Scene4() {
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
      className="absolute inset-0 flex items-center gap-20 px-24 pt-28 pb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-1">
        <motion.p
          className="text-purple text-sm font-semibold tracking-[0.35em] uppercase mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          03 — Il pass
        </motion.p>

        <div className="mb-8">
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-[6vw] leading-[0.9] tracking-tight text-cream"
              initial={{ y: '110%' }}
              animate={phase >= 1 ? { y: '0%' } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Vive nel wallet.
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-[6vw] leading-[0.9] tracking-tight text-purple"
              initial={{ y: '110%' }}
              animate={phase >= 1 ? { y: '0%' } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Zero app.
            </motion.h2>
          </div>
        </div>

        <motion.p
          className="text-cream/55 text-xl max-w-lg mb-8"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Nel wallet che hanno già tutti. Niente da scaricare, niente account, niente password.
        </motion.p>

        <div className="space-y-3">
          {POINTS.map((p, i) => (
            <motion.div
              key={p}
              className="flex items-center gap-3 text-lg text-cream/80"
              initial={{ opacity: 0, x: -16 }}
              animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
            >
              <span className="text-purple text-xl">✓</span>
              {p}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Phone with wallet pass */}
      <motion.div
        className="relative w-[300px] h-[620px] shrink-0 rounded-[3rem] border-[10px] border-[#1a1a1a] bg-black shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute top-0 inset-x-0 flex justify-center pt-3 z-20">
          <div className="w-28 h-7 bg-black rounded-full" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#15121d] to-black px-5 pt-16">
          <div className="text-cream text-2xl font-semibold mb-6">Wallet</div>

          <div className="relative h-[440px]">
            <div className="absolute inset-x-0 top-0 h-44 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 opacity-40" />
            <div className="absolute inset-x-2 top-8 h-44 rounded-2xl bg-gradient-to-br from-zinc-600 to-zinc-800 opacity-50" />

            <motion.div
              className="absolute inset-x-0 top-20 rounded-2xl p-5 shadow-2xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)' }}
              initial={{ y: 280, opacity: 0 }}
              animate={phase >= 2 ? { y: 0, opacity: 1 } : {}}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cream flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-sm bg-purple" />
                  </div>
                  <span className="text-cream font-semibold">Filo Diretto</span>
                </div>
                <span className="text-cream/70 text-xs">Acme Corp</span>
              </div>
              <div className="text-cream/70 text-[10px] uppercase tracking-wider">Dipendente</div>
              <div className="text-cream text-lg font-semibold mb-4">Giulia Bianchi</div>
              <div className="bg-cream rounded-lg h-16 flex items-center justify-center gap-[2px] px-3">
                {Array.from({ length: 34 }).map((_, i) => (
                  <div key={i} className="bg-ink h-9" style={{ width: i % 3 === 0 ? '3px' : '1.5px' }} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {phase >= 3 && (
          <motion.div
            className="absolute bottom-8 inset-x-6 bg-cream rounded-xl py-3 text-center text-ink font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            ✓ Aggiunto al Wallet
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
