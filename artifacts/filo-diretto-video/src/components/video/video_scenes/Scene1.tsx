import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 5000),
      setTimeout(() => setPhase(5), 7000),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-between px-24 pt-20 pb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1 }}
    >
      <div className="w-[45%] z-10 flex flex-col justify-center h-full">
        <motion.div
          className="text-purple/80 text-xs font-semibold tracking-[0.2em] uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          01 — La disconnessione
        </motion.div>

        <div className="mb-10">
          <div className="mb-2">
            <motion.h1
              className="font-display text-[7vw] leading-[1.1] pb-2 text-cream"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 2 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Lavorano
            </motion.h1>
          </div>
          <div>
            <motion.h1
              className="font-display text-[7vw] leading-[1.1] pb-2 text-cream/50 italic"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 3 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              nel silenzio.
            </motion.h1>
          </div>
        </div>

        <motion.p
          className="text-cream/60 text-xl leading-relaxed max-w-md font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Email perse nello spam, intranet mai aperte, app aziendali dimenticate.
          Un'azienda che non riesce a parlare con le sue persone.
        </motion.p>
      </div>

      <motion.div
        className="w-[45%] h-full relative rounded-2xl overflow-hidden"
        initial={{ opacity: 0, x: 40 }}
        animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/frustrated_hr.jpg`}
          alt="Frustrated worker"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      </motion.div>
    </motion.div>
  );
}
