import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NOTIFS = [
  { time: 'ora', title: 'Avviso HR', text: 'Domani gli uffici chiudono alle 15 per disinfestazione.' },
  { time: '10:00', title: 'Buon compleanno!', text: 'Passa in sala break alle 13 per festeggiare 🎉' },
];

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 4500),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center px-24 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-0 right-0 w-[50%] h-full flex justify-end">
         <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-purple/10 blur-[120px] rounded-full" />
            <motion.div 
              className="relative w-[320px] rounded-[2.5rem] bg-ink/90 border border-white/10 shadow-2xl backdrop-blur-md p-4 overflow-hidden"
              initial={{ y: 60, opacity: 0 }}
              animate={phase >= 2 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
               <div className="text-center pt-8 pb-12">
                 <div className="text-cream/50 text-xs uppercase tracking-widest mb-2">Martedì 14</div>
                 <div className="text-cream text-6xl font-light">10:42</div>
               </div>
               
               <div className="space-y-3">
                 {NOTIFS.map((n, i) => (
                   <motion.div 
                     key={i}
                     className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10"
                     initial={{ opacity: 0, x: 20 }}
                     animate={phase >= 3 ? { opacity: 1, x: 0 } : {}}
                     transition={{ duration: 0.5, delay: i * 0.2 }}
                   >
                     <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                           <div className="w-4 h-4 rounded-sm bg-purple" />
                           <span className="text-cream/80 text-xs font-semibold uppercase tracking-wider">Filo Diretto</span>
                        </div>
                        <span className="text-cream/40 text-[10px] uppercase">{n.time}</span>
                     </div>
                     <div className="text-cream text-sm font-medium leading-tight mb-1 mt-2">{n.title}</div>
                     <div className="text-cream/60 text-xs leading-snug">{n.text}</div>
                   </motion.div>
                 ))}
               </div>
            </motion.div>
         </div>
      </div>

      <div className="relative z-10 w-[50%] pt-10">
        <motion.p
          className="text-purple/80 text-xs font-semibold tracking-[0.2em] uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          05 — Le notifiche
        </motion.p>

        <div className="mb-10">
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-display text-[7vw] leading-[1] text-cream"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 2 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Impossibili
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-[7vw] leading-[1] text-purple italic"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 3 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              da ignorare.
            </motion.h1>
          </div>
        </div>

        <motion.p
          className="text-cream/60 text-xl leading-relaxed max-w-sm font-light mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Le comunicazioni importanti appaiono direttamente sulla schermata di blocco.
          Il tasso di lettura supera il 95%.
        </motion.p>
      </div>
    </motion.div>
  );
}
