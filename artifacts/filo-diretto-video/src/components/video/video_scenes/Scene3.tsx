import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 167),
      setTimeout(() => setPhase(2), 667),
      setTimeout(() => setPhase(3), 1667),
      setTimeout(() => setPhase(4), 2917),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-between px-24 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-[35%] z-10 flex flex-col justify-center h-full">
        <motion.div
          className="text-purple/80 text-lg font-semibold tracking-[0.2em] uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          04 — Come funziona
        </motion.div>

        <div className="mb-10">
          <div className="mb-2">
            <motion.h1
              className="font-display text-[clamp(52px,6vw,82px)] leading-[1.1] pb-2 text-cream"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 2 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Semplicità
            </motion.h1>
          </div>
          <div>
            <motion.h1
              className="font-display text-[clamp(52px,6vw,82px)] leading-[1.1] pb-2 text-purple italic"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 3 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              invisibile.
            </motion.h1>
          </div>
        </div>

        <motion.div
          className="text-cream/60 text-2xl leading-relaxed max-w-md font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4">
            Dal pannello personale tutto è sotto controllo. 
            Carica i dati, imposta le automazioni.
          </p>
          <div className="flex items-center gap-3 text-purple-soft text-base font-semibold tracking-wider uppercase">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
             </svg>
             100% a norma di privacy
          </div>
        </motion.div>
      </div>

      <motion.div
        className="w-[60%] h-full relative"
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        animate={phase >= 2 ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-purple/10 blur-[100px] rounded-full" />
        <div className="relative h-full flex flex-col justify-center">
          <div className="rounded-2xl overflow-hidden border border-cream/10 shadow-2xl bg-ink-soft flex flex-col h-[500px]">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-cream/5 bg-ink">
              <span className="w-3 h-3 rounded-full bg-red-500/20" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <span className="w-3 h-3 rounded-full bg-green-500/20" />
              <div className="ml-4 flex-1 bg-white/5 rounded-md px-3 py-1 text-center">
                <span className="text-cream/30 text-xs font-mono">dashboard.filodiretto.it</span>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar */}
              <div className="w-48 border-r border-cream/5 p-4 flex flex-col gap-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded bg-purple flex items-center justify-center">
                    <div className="w-2 h-2 bg-cream rounded-sm" />
                  </div>
                  <span className="text-cream text-sm font-bold tracking-widest uppercase">Filo Diretto</span>
                </div>
                
                <div className="space-y-1">
                  <div className="px-3 py-2 bg-purple/10 text-purple text-xs font-medium rounded-lg">Panoramica</div>
                  <div className="px-3 py-2 text-cream/40 text-xs font-medium rounded-lg">Comunicazioni</div>
                  <div className="px-3 py-2 text-cream/40 text-xs font-medium rounded-lg">Dipendenti</div>
                  <div className="px-3 py-2 text-cream/40 text-xs font-medium rounded-lg">Automazioni</div>
                </div>
              </div>

              {/* Main Area */}
              <div className="flex-1 p-6 bg-ink-soft/50">
                <div className="flex gap-4 mb-6">
                  {/* Metric 1 */}
                  <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4">
                    <div className="text-cream/40 text-[10px] uppercase tracking-wider mb-1">Tasso di Lettura</div>
                    <div className="text-cream text-2xl font-light">98.2%</div>
                  </div>
                  {/* Metric 2 */}
                  <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4">
                    <div className="text-cream/40 text-[10px] uppercase tracking-wider mb-1">Utenti Attivi</div>
                    <div className="text-cream text-2xl font-light">1,204</div>
                  </div>
                  {/* Metric 3 */}
                  <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4">
                    <div className="text-cream/40 text-[10px] uppercase tracking-wider mb-1">Push Inviate</div>
                    <div className="text-cream text-2xl font-light">45K</div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-xl p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-cream text-sm font-medium">Ultime Comunicazioni</div>
                    <div className="text-purple text-xs font-medium bg-purple/10 px-3 py-1 rounded-full">Nuova</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <div>
                        <div className="text-cream text-sm">Chiusura uffici 15/08</div>
                        <div className="text-cream/40 text-[10px]">Inviato a Tutti • 2h fa</div>
                      </div>
                      <div className="text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded">Consegnato</div>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <div>
                        <div className="text-cream text-sm">Aggiornamento policy Smart Working</div>
                        <div className="text-cream/40 text-[10px]">Inviato a HQ Milano • 1gg fa</div>
                      </div>
                      <div className="text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded">Consegnato</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-cream text-sm">Manutenzione server IT</div>
                        <div className="text-cream/40 text-[10px]">Inviato a Tech Dept • 2gg fa</div>
                      </div>
                      <div className="text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded">Consegnato</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
