import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';
import { Scene7 } from './video_scenes/Scene7';

export const SCENE_DURATIONS = {
  problem: 12000,
  intro: 10000,
  dashboard: 16000,
  wallet: 14000,
  push: 14000,
  analytics: 12000,
  outro: 10000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  problem: Scene1,
  intro: Scene2,
  dashboard: Scene3,
  wallet: Scene4,
  push: Scene5,
  analytics: Scene6,
  outro: Scene7,
};

const SCENE_START_SEC: Record<string, number> = (() => {
  const out: Record<string, number> = {};
  let cumulativeMs = 0;
  for (const [key, ms] of Object.entries(SCENE_DURATIONS)) {
    out[key] = cumulativeMs / 1000;
    cumulativeMs += ms;
  }
  return out;
})();

const AUDIO_SEEK_EPSILON_SEC = 0.18;

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  muted = false,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  muted?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentScene, currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 1.0;
    const targetTime = SCENE_START_SEC[baseSceneKey] ?? 0;
    if (Math.abs(audio.currentTime - targetTime) > AUDIO_SEEK_EPSILON_SEC) {
      audio.currentTime = targetTime;
    }
    audio.play().catch(() => {});
  }, [currentSceneKey, baseSceneKey, muted]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-bg-darker text-text-primary">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-[0.15] blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--color-primary), transparent)' }}
          animate={{
            x: ['-20%', '50%', '10%'],
            y: ['10%', '30%', '-20%'],
            scale: [1, 1.2, 0.8]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.1] blur-[100px] right-0 bottom-0"
          style={{ background: 'radial-gradient(circle, var(--color-accent-teal), transparent)' }}
          animate={{
            x: ['20%', '-40%', '0%'],
            y: ['-10%', '-50%', '10%']
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Persistent Luminous Thread */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary-dark)" stopOpacity="0" />
            <stop offset="20%" stopColor="var(--color-primary)" />
            <stop offset="50%" stopColor="var(--color-accent-teal)" />
            <stop offset="80%" stopColor="var(--color-primary-light)" />
            <stop offset="100%" stopColor="var(--color-primary-dark)" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M -100,500 C 300,500 500,200 900,500 S 1500,800 2000,500"
          fill="none"
          stroke="url(#threadGradient)"
          strokeWidth="4"
          filter="url(#glow)"
          animate={{
            d: [
              "M -100,500 C 300,500 500,200 900,500 S 1500,800 2100,500",
              "M -100,600 C 400,200 600,800 1000,500 S 1400,200 2100,600",
              "M -100,400 C 200,800 800,200 1100,600 S 1600,800 2100,400",
              "M -100,500 C 300,500 500,200 900,500 S 1500,800 2100,500",
            ][sceneIndex % 4],
            opacity: sceneIndex === 0 ? 0 : (sceneIndex === 6 ? 0.3 : 0.7)
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        {/* Animated pulse on thread */}
        <motion.circle
          r="6"
          fill="#FFF"
          filter="url(#glow)"
          animate={{
            cx: ["0%", "100%"],
            cy: ["50%", "50%"],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />
      </svg>

      <div className="absolute inset-0 z-20">
        <AnimatePresence mode="popLayout">
          {SceneComponent && <SceneComponent key={currentSceneKey} />}
        </AnimatePresence>
      </div>

      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/composite_audio.mp3`}
        preload="auto"
        autoPlay
        muted={muted}
      />
    </div>
  );
}
