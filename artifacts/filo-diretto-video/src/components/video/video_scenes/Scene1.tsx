import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 5000),
      setTimeout(() => setPhase(4), 7000),
      setTimeout(() => setPhase(5), 9000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-bg-darker"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1 }}
    >
      {/* Distracting floating elements */}
      {phase >= 1 && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute glass-panel rounded-xl px-6 py-4 flex items-center gap-3"
              initial={{ 
                opacity: 0, 
                x: `${Math.random() * 100 - 50}vw`, 
                y: `${Math.random() * 100 - 50}vh`,
                scale: 0.5,
                rotate: Math.random() * 20 - 10
              }}
              animate={{ 
                opacity: [0, 0.4, 0],
                y: `${Math.random() * 40 - 20}vh`,
                rotate: Math.random() * 40 - 20
              }}
              transition={{ 
                duration: 4 + Math.random() * 3, 
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              <div className="w-8 h-8 rounded-full bg-white/10" />
              <div className="space-y-2">
                <div className="w-24 h-2 bg-white/20 rounded" />
                <div className="w-16 h-2 bg-white/10 rounded" />
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="text-center relative z-10 max-w-4xl px-8">
        <motion.p
          className="text-primary-light text-2xl font-medium tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Il problema
        </motion.p>

        <motion.h1 
          className="text-[5vw] leading-[1.1] font-black tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Le comunicazioni aziendali<br/>
          <span className="text-text-secondary line-through decoration-error/50 decoration-[0.5rem]">si perdono.</span>
        </motion.h1>

        <div className="mt-12 flex justify-center gap-12">
          {['Email ignorate', 'Bacheche invisibili', 'App non scaricate'].map((text, i) => (
            <motion.div
              key={text}
              className="text-xl text-text-secondary font-medium"
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={phase >= 4 ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(5px)" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              {text}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
