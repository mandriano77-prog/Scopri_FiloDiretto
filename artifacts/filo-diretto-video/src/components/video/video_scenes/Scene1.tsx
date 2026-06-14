import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 167),
      setTimeout(() => setPhase(2), 667),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2500),
      setTimeout(() => setPhase(5), 3750),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-between px-20 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-[45%] z-10 flex flex-col justify-center h-full max-w-xl">
        <motion.div
          className="text-purple/80 text-xs font-semibold tracking-[0.2em] uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          02 — La disconnessione
        </motion.div>

        <div className="mb-10 w-full">
          <div className="mb-2">
            <motion.h1
              className="font-display text-[clamp(44px,5vw,70px)] leading-[1.05] pb-2 text-cream whitespace-nowrap"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 2 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Lavorano
            </motion.h1>
          </div>
          <div>
            <motion.h1
              className="font-display text-[clamp(44px,5vw,70px)] leading-[1.05] pb-2 text-cream/50 italic whitespace-nowrap"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 3 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              nel silenzio.
            </motion.h1>
          </div>
        </div>

        <motion.p
          className="text-cream/60 text-lg leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Email perse nello spam, intranet mai aperte, app aziendali dimenticate.
          Un'azienda che non riesce a parlare con le sue persone.
        </motion.p>
      </div>

      <motion.div
        className="w-[45%] h-full relative rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, x: 40 }}
        animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/frustrated_hr.jpg`}
          alt="Frustrated worker"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </motion.div>
    </motion.div>
  );
}
