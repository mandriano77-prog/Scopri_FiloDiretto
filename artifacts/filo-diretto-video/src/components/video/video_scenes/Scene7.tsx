import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import faviconSvg from '@assets/filo_ref/favicon.svg';

export function Scene7() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1800),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-20 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
         <motion.div 
           className="w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
           style={{ background: 'radial-gradient(circle, var(--color-purple) 0%, transparent 70%)' }}
           initial={{ scale: 0.8, opacity: 0 }}
           animate={phase >= 1 ? { scale: 1, opacity: 0.3 } : {}}
           transition={{ duration: 3, ease: "easeOut" }}
         />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={faviconSvg} alt="Filo Diretto" className="w-16 h-16 mb-8" />
        <h1 className="font-display text-[9vw] leading-[1] text-cream italic pr-8">
          Filo Diretto
        </h1>
        
        <motion.p
          className="text-cream/50 text-xl tracking-[0.2em] uppercase mt-12 font-medium"
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Il canale che mancava
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
