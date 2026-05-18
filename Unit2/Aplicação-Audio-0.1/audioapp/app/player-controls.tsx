// Representa o conjunto de controles, englobando as funcionalidades de play/pause, avançar/retroceder áudios e avançar/retroceder o tempo do áudio.

import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaBackward, FaForward } from "react-icons/fa";

interface PlayerControlsProps {
  isPlaying: boolean;
  onPreviousTrack: () => void;
  onRewind: () => void;
  onTogglePlay: () => void;
  onForward: () => void;
  onNextTrack: () => void;
}

export function PlayerControls({
  isPlaying,
  onPreviousTrack,
  onRewind,
  onTogglePlay,
  onForward,
  onNextTrack,
}: PlayerControlsProps) {
  return (
    <div className="mt-8 mb-4 flex items-center justify-center gap-4">
      
      
      <button
        onClick={onPreviousTrack}
        className="text-zinc-500 transition-colors hover:text-white hover:scale-110"
      >
        <FaStepBackward size={20} />
      </button>

      
      <button
        onClick={onRewind}
        className="text-zinc-500 transition-colors hover:text-amber-400 hover:scale-110"
        title="Voltar 10s"
      >
        <FaBackward size={18} />
      </button>

     
      <button
        onClick={onTogglePlay}
        className={`group relative flex h-20 w-20 items-center justify-center rounded-full transition-all duration-500 ${
          isPlaying
            ? "bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.3)] scale-105"
            : "bg-white text-black hover:scale-110"
        }`}
      >
        {isPlaying ? <FaPause size={28} /> : <FaPlay size={28} className="ml-1" />}
      </button>

      
      <button
        onClick={onForward}
        className="text-zinc-500 transition-colors hover:text-amber-400 hover:scale-110"
        title="Avançar 10s"
      >
        <FaForward size={18} />
      </button>

      
      <button
        onClick={onNextTrack}
        className="text-zinc-500 transition-colors hover:text-white hover:scale-110"
      >
        <FaStepForward size={20} />
      </button>

    </div>
  );
}