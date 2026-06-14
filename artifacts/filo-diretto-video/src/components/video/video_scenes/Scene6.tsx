import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const STATS = [
  { value: '98%', label: 'Tasso di installazione' },
  { value: '4x', label: 'Engagement in più' },
  { value: '100%', label: 'Copertura aziendale' },
];

export function Scene6() {
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
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.img
          src={`${import.meta.env.BASE_URL}images/office_team.jpg`}
          alt="Happy team"
          className="w-full h-full object-cover object-center opacity-20 grayscale"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
      </div>

      <div className="relative z-10 w-full pt-10">
        <motion.p
          className="text-purple/80 text-xs font-semibold tracking-[0.2em] uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          06 — I Risultati
        </motion.p>

        <div className="mb-16">
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-display text-[7vw] leading-[1] text-cream"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 2 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Engagement
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-[7vw] leading-[1] text-purple italic"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 3 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              reale, misurato.
            </motion.h1>
          </div>
        </div>

        <div className="flex gap-20">
           {STATS.map((s, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8, delay: i * 0.2 }}
             >
                <div className="font-display text-7xl text-cream leading-none mb-4">{s.value}</div>
                <div className="text-cream/50 text-sm tracking-widest uppercase font-medium">{s.label}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </motion.div>
  );
}
