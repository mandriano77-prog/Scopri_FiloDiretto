import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import dashboardPng from '@assets/filo_ref/dashboard.png';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 4000),
      setTimeout(() => setPhase(4), 8000),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-between px-24 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1 }}
    >
      <div className="w-[35%] z-10 flex flex-col justify-center h-full">
        <motion.div
          className="text-purple/80 text-xs font-semibold tracking-[0.2em] uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          03 — Come funziona
        </motion.div>

        <div className="mb-10">
          <div className="mb-2">
            <motion.h1
              className="font-display text-[6vw] leading-[1.1] pb-2 text-cream"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 2 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Semplicità
            </motion.h1>
          </div>
          <div>
            <motion.h1
              className="font-display text-[6vw] leading-[1.1] pb-2 text-purple italic"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 3 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              invisibile.
            </motion.h1>
          </div>
        </div>

        <motion.div
          className="text-cream/60 text-xl leading-relaxed max-w-sm font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4">
            Dal pannello personale tutto è sotto controllo. 
            Carica i dati, imposta le automazioni.
          </p>
          <div className="flex items-center gap-3 text-purple-soft text-sm font-semibold tracking-wider uppercase">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
             </svg>
             100% a norma di privacy
          </div>
        </motion.div>
      </div>

      <motion.div
        className="w-[55%] h-full relative"
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        animate={phase >= 2 ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-purple/5 blur-[100px] rounded-full" />
        <div className="relative h-full flex flex-col justify-center">
          <div className="rounded-xl overflow-hidden border border-cream/10 shadow-2xl bg-ink-soft/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-cream/5 bg-ink/50">
              <span className="w-3 h-3 rounded-full bg-red-500/20" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <span className="w-3 h-3 rounded-full bg-green-500/20" />
              <span className="ml-3 text-cream/30 text-xs font-mono">dashboard.filodiretto.it</span>
            </div>
            <img
              src={dashboardPng}
              alt="Dashboard HR"
              className="w-full block object-cover mix-blend-luminosity grayscale-[30%] opacity-90"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
