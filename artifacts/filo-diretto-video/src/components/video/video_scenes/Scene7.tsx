import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import faviconSvg from '@assets/filo_ref/favicon.svg';

export function Scene7() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-bg-darker"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="flex items-center gap-6 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <img src={faviconSvg} alt="Logo" className="w-16 h-16" />
          <h1 className="text-5xl font-bold tracking-tight">Filo Diretto</h1>
        </motion.div>

        <motion.div
          className="text-3xl font-light text-primary-light tracking-widest"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={phase >= 2 ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(10px)" }}
          transition={{ duration: 1 }}
        >
          Il filo che collega.
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_50%)] opacity-10 blur-3xl" />
      </motion.div>
    </motion.div>
  );
}
