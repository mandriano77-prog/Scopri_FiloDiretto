import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PhoneFrame } from '../PhoneFrame';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setPhase(4), 2800),
      setTimeout(() => setPhase(5), 3800),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center px-16 py-16 lg:px-24 lg:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-0 right-0 w-[50%] h-full flex items-center justify-center py-20 pr-16 relative">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={phase >= 2 ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <PhoneFrame screenClassName="bg-ink flex flex-col items-center pt-12">
            
            <motion.div
              className="w-[90%] mx-auto mt-4 rounded-3xl p-5 shadow-2xl relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.95), rgba(109,40,217,0.95))' }}
              initial={{ y: 50, opacity: 0 }}
              animate={phase >= 3 ? { y: 0, opacity: 1 } : {}}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            >
              {/* Fake Apple Wallet Pass Header */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-7 h-7 rounded-full bg-cream flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-purple" />
                </div>
                <span className="text-cream/80 text-[9px] font-bold tracking-widest uppercase">Badge & Pass</span>
              </div>
              
              <div className="text-cream text-2xl font-display leading-none mb-1 relative z-10">Giulia Bianchi</div>
              <div className="text-cream/70 text-xs mb-5 relative z-10">Marketing Team</div>
              
              <div className="w-full aspect-square bg-white rounded-2xl p-3 flex items-center justify-center relative z-10 shadow-sm">
                 <svg className="w-full h-full text-ink" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h8v8H3zM5 5v4h4V5zM13 3h8v8h-8zM15 5v4h4V5zM3 13h8v8H3zM5 15v4h4v-4zM13 13h2v2h-2zM15 13h2v2h-2zM17 13h2v2h-2zM19 13h2v2h-2zM13 15h2v2h-2zM17 15h2v2h-2zM13 17h2v2h-2zM15 17h2v2h-2zM19 17h2v2h-2zM15 19h2v2h-2zM17 19h2v2h-2zM19 19h2v2h-2z" />
                 </svg>
              </div>
              
              <div className="text-center text-cream/50 text-[9px] uppercase tracking-widest mt-4 relative z-10 font-semibold">NFC / QR Ready</div>
              
              {/* Decorative pass styling */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-black/20 rounded-full blur-xl pointer-events-none" />
            </motion.div>

          </PhoneFrame>

          <motion.div
            className="absolute -left-12 bottom-12 bg-cream text-ink px-4 py-3 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 border border-white/50 z-20"
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={phase >= 5 ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
          >
            <div className="w-8 h-8 rounded-full bg-purple/15 flex items-center justify-center text-purple">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                 <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                 <circle cx="12" cy="10" r="3"></circle>
               </svg>
            </div>
            <div>
              <div className="text-xs font-bold leading-tight">Convenzioni locali</div>
              <div className="text-[10px] text-ink/60 font-medium">Sconti vicino a te</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 w-[50%] pr-12">
        <motion.p
          className="text-purple/80 text-xs font-semibold tracking-[0.2em] uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          04 — Il Pass
        </motion.p>

        <div className="mb-10">
          <div className="mb-2">
            <motion.h1
              className="font-display text-[7vw] leading-[1.1] pb-2 text-cream"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 2 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Vive nel
            </motion.h1>
          </div>
          <div>
            <motion.h1
              className="font-display text-[7vw] leading-[1.1] pb-2 text-purple italic"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 3 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              loro Wallet.
            </motion.h1>
          </div>
        </div>

        <motion.p
          className="text-cream/60 text-xl leading-relaxed max-w-sm font-light mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Accanto alle carte di credito e ai biglietti aerei. 
          Sempre a portata di mano. Funziona anche offline come badge aziendale.
        </motion.p>

        <motion.p
          className="text-purple/90 text-lg leading-relaxed max-w-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Include sconti geolocalizzati grazie ai partner sul territorio.
        </motion.p>
      </div>
    </motion.div>
  );
}
