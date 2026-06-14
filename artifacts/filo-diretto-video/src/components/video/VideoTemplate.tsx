import { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';
import { Scene7 } from './video_scenes/Scene7';
import { Scene0 } from './video_scenes/Scene0';

export const SCENE_DURATIONS = {
  context: 8400,
  problem: 10000,
  intro: 8400,
  dashboard: 12000,
  wallet: 11600,
  push: 11600,
  analytics: 10000,
  outro: 8400,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  context: Scene0,
  problem: Scene1,
  intro: Scene2,
  dashboard: Scene3,
  wallet: Scene4,
  push: Scene5,
  analytics: Scene6,
  outro: Scene7,
};

const SCENE_LABELS: Record<string, string> = {
  context: 'Le persone',
  problem: 'Il problema',
  intro: 'La soluzione',
  dashboard: 'Come funziona',
  wallet: 'Il pass',
  push: 'Le push',
  analytics: 'I risultati',
  outro: 'Filo Diretto',
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

const NOISE =
  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';

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
  const { currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneKeys = Object.keys(SCENE_DURATIONS);
  const sceneIndex = sceneKeys.indexOf(baseSceneKey);
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

  const sceneNo = String(sceneIndex + 1).padStart(2, '0');
  const totalNo = String(sceneKeys.length).padStart(2, '0');

  return (
    <div className="relative w-full h-screen overflow-hidden bg-ink text-cream">
      {/* Ambience: single restrained purple wash + grain */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute -top-1/3 -left-1/4 w-[820px] h-[820px] rounded-full opacity-[0.10] blur-[150px]"
          style={{ background: 'radial-gradient(circle, var(--color-purple), transparent)' }}
        />
        <div
          className="absolute -bottom-1/3 -right-1/4 w-[640px] h-[640px] rounded-full opacity-[0.06] blur-[150px]"
          style={{ background: 'radial-gradient(circle, var(--color-purple-bright), transparent)' }}
        />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: NOISE }} />
      </div>

      {/* Scenes */}
      <div className="absolute inset-0 z-10">
        <AnimatePresence mode="popLayout">
          {SceneComponent && <SceneComponent key={currentSceneKey} />}
        </AnimatePresence>
      </div>

      {/* Editorial chrome — top */}
      <div className="absolute inset-x-0 top-0 z-30 pointer-events-none">
        <div className="flex items-center justify-between px-10 py-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-purple" />
            <span className="text-xs font-bold tracking-[0.38em] uppercase text-cream">Filo Diretto</span>
          </div>
        </div>
        <div className="mx-10 h-px bg-cream/10" />
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
