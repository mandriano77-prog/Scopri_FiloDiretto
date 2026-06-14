import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import faviconSvg from '@assets/filo_ref/favicon.svg';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 4000),
      setTimeout(() => setPhase(4), 6000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: "-100vh" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="w-32 h-32 mb-8 relative"
          initial={{ opacity: 0, scale: 0, rotate: -90 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -90 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
          <img src={faviconSvg} alt="Filo Diretto Logo" className="w-full h-full relative z-10" />
        </motion.div>

        <motion.h1
          className="text-[6vw] font-black tracking-tight leading-none mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          C'è un modo<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-accent-teal">
            più diretto.
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl text-text-secondary max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Introduciamo <strong className="text-white">Filo Diretto</strong>. <br/>
          Il pass digitale per comunicare con ogni dipendente.
        </motion.p>
      </div>
    </motion.div>
  );
}
