import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const STATS = [
  { value: '98%', label: 'Tasso di lettura' },
  { value: '4x', label: 'Engagement reale' },
  { value: '100%', label: 'Reward erogati' },
];

export function Scene6() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 167),
      setTimeout(() => setPhase(2), 667),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2333),
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
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.img
          src={`${import.meta.env.BASE_URL}images/office_team.jpg`}
          alt="Happy team"
          className="w-full h-full object-cover object-center opacity-20 grayscale"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8.33, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
      </div>

      <div className="relative z-10 w-full">
        <motion.p
          className="text-purple/80 text-lg font-semibold tracking-[0.2em] uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          07 — I Risultati
        </motion.p>

        <div className="mb-16">
          <div className="mb-2">
            <motion.h1
              className="font-display text-[clamp(60px,7vw,96px)] leading-[1.1] pb-2 text-cream"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 2 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Engagement
            </motion.h1>
          </div>
          <div>
            <motion.h1
              className="font-display text-[clamp(60px,7vw,96px)] leading-[1.1] pb-2 text-purple italic"
              initial={{ y: '100%', rotateX: 20 }}
              animate={phase >= 3 ? { y: '0%', rotateX: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              reale, premiato.
            </motion.h1>
          </div>
        </div>

        <div className="flex gap-20">
           {STATS.map((s, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: i * 0.167 }}
             >
                <div className="font-display text-7xl text-cream leading-none mb-4">{s.value}</div>
                <div className="text-cream/50 text-lg tracking-widest uppercase font-medium">{s.label}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </motion.div>
  );
}
