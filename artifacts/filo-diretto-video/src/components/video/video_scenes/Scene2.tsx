import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import faviconSvg from '@assets/filo_ref/favicon.svg';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3600),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-20 pt-28 pb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -60, filter: 'blur(8px)' }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        className="text-cream/50 text-sm font-semibold tracking-[0.35em] uppercase mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        HR Communication Platform · 2026
      </motion.p>

      <div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[9vw] leading-[0.88] tracking-tight text-cream"
            initial={{ y: '110%' }}
            animate={phase >= 2 ? { y: '0%' } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            Il canale
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[9vw] leading-[0.88] tracking-tight text-purple"
            initial={{ y: '110%' }}
            animate={phase >= 2 ? { y: '0%' } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            che mancava.
          </motion.h1>
        </div>
      </div>

      <motion.p
        className="text-cream/60 text-2xl mt-10 max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Un canale diretto tra HR e ogni dipendente. Push sulla lock screen, automazioni
        intelligenti. Senza app, senza intranet.
      </motion.p>

      <motion.div
        className="flex items-center gap-4 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <img src={faviconSvg} alt="" className="w-9 h-9" />
        <span className="text-2xl font-semibold tracking-tight text-cream">Filo Diretto</span>
      </motion.div>
    </motion.div>
  );
}
