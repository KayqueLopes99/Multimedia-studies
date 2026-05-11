"use client";


import { useState, useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { PLAYLIST } from "./music-data";
import { Track } from "./music-types";
import { TrackButton } from "./track-button";

export default function MusicPlayer() {
  // 3 "estados" (memórias do componente):

  // 1. isPlaying: sabe se está tocando (começa como false).
  const [isPlaying, setIsPlaying] = useState(false);

  // 2. volume: controla a barra de volume.
  const [volume, setVolume] = useState(0.5);

  // 3. selectedTrack: sabe qual música está selecionada.
  const [selectedTrack, setSelectedTrack] = useState<Track>(PLAYLIST[0]);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Função Play ou Pause.
  const togglePlay = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();

      setIsPlaying(!isPlaying);
    }
  };

  // Função volume.
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);

    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
  };

  const changeTrack = (track: Track) => {
    setSelectedTrack(track);

    setIsPlaying(false);

    
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.load(); 
        audioRef.current.play(); 
        setIsPlaying(true);      
      }
    }, 100);
  };

  return (

    <div className="flex w-full max-w-[380px] flex-col items-center rounded-[2rem] border border-white/10 bg-zinc-900/90 p-8 backdrop-blur-md shadow-2xl">

      
      <h2 className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
        Pokemon Battle Themes
      </h2>

  
      <audio ref={audioRef} src={selectedTrack.url} loop />

      <button
        onClick={togglePlay} 

        className={`group relative flex h-24 w-24 items-center justify-center rounded-full transition-all duration-500 ${isPlaying
            ? "bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.3)] scale-105"
            : "bg-white text-black hover:scale-110"
          }`}
      >
        
        {isPlaying ? <FaPause size={32} /> : <FaPlay size={32} className="ml-2" />}
      </button>

      <div className="mt-10 w-full grid grid-cols-2 gap-4">
        
        {PLAYLIST.map((track) => (
          <TrackButton
            key={track.id} 
            track={track} 
            isSelected={selectedTrack.id === track.id} 
            onSelect={changeTrack}
          />
        ))}
      </div>

      
      <div className="mt-10 flex w-full flex-col items-center gap-4 border-t border-white/5 pt-8">
        <div className="flex items-center gap-3 text-zinc-500">
          <FaVolumeUp size={14} />
          
          <span className="text-[10px] font-bold tabular-nums">{Math.round(volume * 100)}%</span>
        </div>

        <input
          type="range" min="0" max="1" step="0.01" value={volume}
          onChange={handleVolumeChange} 
          className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-amber-400"
        />
      </div>
    </div>
  );
}