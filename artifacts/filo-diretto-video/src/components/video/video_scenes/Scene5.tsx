import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PhoneFrame } from '../PhoneFrame';

const NOTIFS = [
  { time: 'ora', title: 'Comunicazione Interna', text: 'Domani gli uffici chiudono alle 15 per disinfestazione.' },
  { time: '10:00', title: 'Buon compleanno!', text: 'Passa in sala break alle 13 per festeggiare 🎉' },
];

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setPhase(4), 2800),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center px-24 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-0 right-0 w-[50%] h-full flex justify-center py-20 pr-16 relative">
         <div className="relative w-full h-full flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-purple/10 blur-[120px] rounded-full pointer-events-none" />
            
            <motion.div 
              initial={{ y: 60, opacity: 0 }}
              animate={phase >= 2 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <PhoneFrame screenClassName="bg-gradient-to-b from-ink/90 to-ink border-0 flex flex-col p-4 shadow-inner">
                {/* Lock Screen Header */}
                <div className="text-center pt-8 pb-8">
                  <div className="text-cream/50 text-[10px] uppercase tracking-widest font-semibold mb-1">Martedì 14</div>
                  <div className="text-cream text-5xl font-light tracking-tight">10:42</div>
                </div>
                
                {/* Notifications Stack */}
                <div className="space-y-3 mt-4">
                  {NOTIFS.map((n, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white/10 backdrop-blur-xl rounded-2xl p-3.5 shadow-lg border border-white/10 relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.2 + 0.2 }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                         <div className="flex items-center gap-1.5">
                            <div className="w-3.5 h-3.5 rounded-[3px] bg-purple flex items-center justify-center">
                              <span className="text-white text-[8px] font-bold">f</span>
                            </div>
                            <span className="text-cream/80 text-[9px] font-bold uppercase tracking-widest">Filo Diretto</span>
                         </div>
                         <span className="text-cream/40 text-[9px] uppercase">{n.time}</span>
                      </div>
                      <div className="text-cream text-sm font-semibold leading-tight mb-1">{n.title}</div>
                      <div className="text-cream/70 text-xs leading-snug font-medium">{n.text}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Lock Icon indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
                  <div className="w-10 h-1 rounded-full bg-white/30" />
                </div>
              </PhoneFrame>
            </motion.div>
         </div>
      </div>

      <div className="relative z-10 w-[50%]">
        <motion.p
          className="text-purple/80 text-xs font-semibold tracking-[0.2em] uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          05 — Le notifiche
        </motion.p>

        <div className="mb-10">
          <div className="mb-2">
            <motion.h1
              className="font-display text-[7vw] leading-[1.1] pb-2 text-cream"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 2 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Impossibili
            </motion.h1>
          </div>
          <div>
            <motion.h1
              className="font-display text-[7vw] leading-[1.1] pb-2 text-purple italic"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 3 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              da ignorare.
            </motion.h1>
          </div>
        </div>

        <motion.p
          className="text-cream/60 text-xl leading-relaxed max-w-sm font-light mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Le comunicazioni importanti appaiono direttamente sulla schermata di blocco.
          Il tasso di lettura supera il 95%.
        </motion.p>
      </div>
    </motion.div>
  );
}
