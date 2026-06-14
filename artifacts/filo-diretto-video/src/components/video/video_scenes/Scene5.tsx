import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000),
      setTimeout(() => setPhase(2), 3000),
      setTimeout(() => setPhase(3), 6000),
      setTimeout(() => setPhase(4), 9000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0, x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
      transition={{ duration: 1 }}
    >
      <div className="text-center z-20 absolute top-20">
        <motion.h2
          className="text-[4.5vw] font-black tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          Comunicazione in tempo reale
        </motion.h2>
        <motion.p
          className="text-2xl text-text-secondary mt-4"
          initial={{ opacity: 0 }}
          animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          Invia notifiche push. Si aggiornano sul pass.
        </motion.p>
      </div>

      {/* Side-by-side comparison */}
      <div className="flex w-full px-20 items-center justify-between mt-20 z-10 gap-20">
        
        {/* HR Dashboard simplified representation sending a message */}
        <motion.div 
          className="flex-1 glass-panel rounded-2xl p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        >
          <div className="text-xl font-medium mb-6">Invia Notifica</div>
          <div className="space-y-4">
            <div className="h-10 bg-white/5 rounded border border-white/10 flex items-center px-4 text-white/50">
              Titolo: Chiusura uffici festività
            </div>
            <div className="h-24 bg-white/5 rounded border border-white/10 flex p-4 text-white/50">
              Messaggio: Gli uffici chiuderanno alle 14:00...
            </div>
            <motion.div 
              className="h-12 bg-primary rounded flex items-center justify-center font-bold"
              animate={phase >= 3 ? { backgroundColor: 'var(--color-success)', scale: 0.95 } : {}}
            >
              {phase >= 3 ? 'Inviato!' : 'Invia a tutti'}
            </motion.div>
          </div>
        </motion.div>

        {/* The Connection Line visualization */}
        <motion.div 
          className="w-32 h-1 bg-white/10 relative"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
        >
          {phase >= 3 && (
            <motion.div 
              className="absolute inset-y-0 left-0 bg-accent-teal shadow-[0_0_15px_var(--color-accent-teal)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, ease: "linear" }}
            />
          )}
        </motion.div>

        {/* Employee Phone Lock Screen */}
        <motion.div 
          className="w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        >
          {/* Wallpaper */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
          
          {/* Time */}
          <div className="absolute top-16 inset-x-0 text-center text-white text-5xl font-light">
            14:30
          </div>

          {/* Notification */}
          <AnimatePresence>
            {phase >= 3 && (
              <motion.div 
                className="absolute top-40 inset-x-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 flex gap-3"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", damping: 15 }}
              >
                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
                <div>
                  <div className="text-white text-sm font-bold flex justify-between">
                    <span>Filo Diretto</span>
                    <span className="text-white/50 text-xs font-normal">adesso</span>
                  </div>
                  <div className="text-white font-medium text-sm mt-1">Chiusura uffici festività</div>
                  <div className="text-white/80 text-xs mt-1 leading-snug">Gli uffici chiuderanno alle 14:00. Buone feste!</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </motion.div>
  );
}
