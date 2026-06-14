import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 5000),
      setTimeout(() => setPhase(4), 8000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: "-100vw" }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-20 text-center z-20">
        <motion.h2
          className="text-[4vw] font-bold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          Zero app da installare.
        </motion.h2>
        <motion.p
          className="text-2xl text-text-secondary mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          Il pass vive nel Wallet nativo del telefono.
        </motion.p>
      </div>

      {/* Phone Mockup */}
      <motion.div 
        className="relative mt-32 w-[320px] h-[650px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-0 inset-x-0 h-8 flex justify-center mt-2 z-50">
          <div className="w-32 h-7 bg-black rounded-full" />
        </div>

        {/* Screen Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black p-6 pt-20">
          <div className="text-white text-3xl font-bold mb-8">Wallet</div>
          
          {/* Other passes */}
          <div className="space-y-[-100px] perspective-1000">
            <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg transform rotate-x-12 opacity-50" />
            <div className="h-48 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 shadow-lg transform rotate-x-12 opacity-50" />
            
            {/* Filo Diretto Pass */}
            <motion.div 
              className="relative h-64 rounded-2xl bg-gradient-to-br from-primary-dark to-primary shadow-2xl overflow-hidden border border-white/20 p-6 flex flex-col justify-between"
              initial={{ y: 200, opacity: 0, rotateX: 20 }}
              animate={phase >= 3 ? { y: -20, opacity: 1, rotateX: 0, zIndex: 50 } : { y: 200, opacity: 0, rotateX: 20 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 rounded bg-primary" />
                </div>
                <div className="text-right">
                  <div className="text-white/80 text-sm font-medium">Acme Corp</div>
                  <div className="text-white font-bold">Employee Pass</div>
                </div>
              </div>
              <div>
                <div className="text-white/80 text-xs mb-1">NOME</div>
                <div className="text-white font-medium text-lg">Giulia Bianchi</div>
                
                <div className="mt-4 w-full h-16 bg-white/20 rounded flex items-center justify-center overflow-hidden">
                   {/* Fake barcode */}
                   <div className="flex gap-1 h-10 w-full px-4 items-center justify-center">
                     {Array.from({ length: 30 }).map((_, i) => (
                       <div key={i} className="bg-white h-full" style={{ width: Math.random() > 0.5 ? '2px' : '4px' }} />
                     ))}
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}
