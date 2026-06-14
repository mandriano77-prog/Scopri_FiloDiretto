import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene6() {
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
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: "100vh" }}
      transition={{ duration: 1.2 }}
    >
      <div className="text-center w-full max-w-5xl px-8 z-10">
        <motion.h2
          className="text-[4vw] font-bold tracking-tight mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          Misura l'engagement.
        </motion.h2>

        <div className="grid grid-cols-3 gap-8">
          {[
            { label: "Installazioni", value: "98%", color: "text-accent-teal" },
            { label: "Tasso di apertura", value: "85%", color: "text-primary-light" },
            { label: "Feedback positivi", value: "4.9/5", color: "text-success" }
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              className="glass-panel rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={phase >= (2 + i) ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className={`text-6xl font-black mb-4 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xl text-text-secondary font-medium">
                {stat.label}
              </div>
              
              {/* Decorative background chart line */}
              <svg className="absolute bottom-0 left-0 w-full h-1/2 opacity-20" preserveAspectRatio="none" viewBox="0 0 100 100">
                <motion.path 
                  d={`M0,100 L0,${50 + Math.random()*20} Q25,${20 + Math.random()*20} 50,${40 + Math.random()*20} T100,${10 + Math.random()*20} L100,100 Z`}
                  fill="currentColor"
                  className={stat.color}
                  initial={{ y: 100 }}
                  animate={phase >= (2 + i) ? { y: 0 } : { y: 100 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
