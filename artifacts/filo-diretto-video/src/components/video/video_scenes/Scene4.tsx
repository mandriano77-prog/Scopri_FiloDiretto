import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 5000),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center px-16 py-16 lg:px-24 lg:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-0 right-0 w-[45%] h-full flex justify-end">
        <motion.div 
          className="w-full h-full relative overflow-hidden"
          initial={{ opacity: 0, x: 40 }}
          animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hand_phone.jpg`}
            alt="Hand holding phone"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
          
          <motion.div
            className="absolute right-12 top-1/2 -translate-y-1/2 w-[260px] rounded-2xl p-5 shadow-2xl overflow-hidden backdrop-blur-xl border border-white/10"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.95), rgba(109,40,217,0.95))' }}
            initial={{ y: '60%', opacity: 0, rotate: 5 }}
            animate={phase >= 3 ? { y: '-50%', opacity: 1, rotate: 0 } : {}}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-8 h-8 rounded bg-cream flex items-center justify-center">
                <div className="w-4 h-4 rounded-sm bg-purple" />
              </div>
              <span className="text-cream/80 text-[10px] font-bold tracking-widest uppercase">Badge & Pass</span>
            </div>
            <div className="text-cream text-2xl font-display leading-none mb-1">Giulia Bianchi</div>
            <div className="text-cream/60 text-xs mb-5">Marketing Team</div>
            
            <div className="w-full aspect-square max-h-32 mx-auto bg-white rounded-lg p-2 flex items-center justify-center relative overflow-hidden mb-2">
               <svg className="w-full h-full text-ink" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h8v8H3zM5 5v4h4V5zM13 3h8v8h-8zM15 5v4h4V5zM3 13h8v8H3zM5 15v4h4v-4zM13 13h2v2h-2zM15 13h2v2h-2zM17 13h2v2h-2zM19 13h2v2h-2zM13 15h2v2h-2zM17 15h2v2h-2zM13 17h2v2h-2zM15 17h2v2h-2zM19 17h2v2h-2zM15 19h2v2h-2zM17 19h2v2h-2zM19 19h2v2h-2z" />
               </svg>
            </div>
            <div className="text-center text-cream/40 text-[9px] uppercase tracking-widest mt-2">NFC / QR Ready</div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 w-[55%] pt-10 pr-12">
        <motion.p
          className="text-purple/80 text-xs font-semibold tracking-[0.2em] uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          04 — Il Pass
        </motion.p>

        <div className="mb-10">
          <div className="mb-2">
            <motion.h1
              className="font-display text-[7vw] leading-[1.1] pb-2 text-cream"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 2 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Vive nel
            </motion.h1>
          </div>
          <div>
            <motion.h1
              className="font-display text-[7vw] leading-[1.1] pb-2 text-purple italic"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 3 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              loro Wallet.
            </motion.h1>
          </div>
        </div>

        <motion.p
          className="text-cream/60 text-xl leading-relaxed max-w-sm font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Accanto alle carte di credito e ai biglietti aerei. 
          Sempre a portata di mano. Funziona anche offline come badge aziendale.
        </motion.p>
      </div>
    </motion.div>
  );
}
