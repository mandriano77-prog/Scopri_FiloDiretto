import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import faviconSvg from '@assets/filo_ref/favicon.svg';

export function Scene7() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2600),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-20 pt-28 pb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex items-center gap-5 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={faviconSvg} alt="" className="w-14 h-14" />
        <h1 className="font-display text-[7vw] leading-none tracking-tight text-cream">Filo Diretto</h1>
      </motion.div>

      <motion.p
        className="text-cream/65 text-2xl"
        initial={{ opacity: 0, y: 16 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Il canale diretto tra HR e ogni dipendente.
      </motion.p>

      <motion.p
        className="text-purple text-lg font-medium tracking-wide mt-6"
        initial={{ opacity: 0, y: 16 }}
        animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Senza app. Senza intranet. Nel wallet che hanno già tutti.
      </motion.p>
    </motion.div>
  );
}
