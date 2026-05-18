"use client";

import { useState, useRef } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { PLAYLIST } from "./music-data";
import { Track } from "./music-types";
import { TrackButton } from "./track-button";
import { PlayerControls } from "./player-controls";

export default function MusicPlayer() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [selectedTrack, setSelectedTrack] = useState<Track>(PLAYLIST[0]);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);


  // play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // manipular volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
  };

  // trocar a música
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

  // arrastar o tempo do áudio.
  const handleTimeSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // avançar tempo de áudio.
  const forwardTenSeconds = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, totalDuration);
    }
  };

  // Retroceder tempo de áudio
  const rewindTenSeconds = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    }
  };

  // avançar para a próxima faixa 
  const nextTrack = () => {
    const currentIndex = PLAYLIST.findIndex((track) => track.id === selectedTrack.id);
    const nextIndex = currentIndex === PLAYLIST.length - 1 ? 0 : currentIndex + 1;
    changeTrack(PLAYLIST[nextIndex]);
  };

  // retroceder para a faixa anterior
  const previousTrack = () => {
    const currentIndex = PLAYLIST.findIndex((track) => track.id === selectedTrack.id);
    const previousIndex = currentIndex === 0 ? PLAYLIST.length - 1 : currentIndex - 1;
    changeTrack(PLAYLIST[previousIndex]);
  };

  // Formata os segundos
  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  
  return (
    <div className="flex w-full max-w-[380px] flex-col items-center rounded-[2rem] border border-white/10 bg-zinc-900/90 p-8 backdrop-blur-md shadow-2xl">

      
      <h2 className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
        Pokemon Themes
      </h2>

      <div className="w-full flex flex-col gap-2 mt-4">
        <input
          type="range"
          max={totalDuration}
          value={currentTime}
          onChange={handleTimeSeek}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-amber-400"
        />
        <div className="flex w-full justify-between text-[10px] font-bold text-zinc-500 tabular-nums">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(totalDuration)}</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={selectedTrack.url}
        loop
        onLoadedMetadata={(e) => {
          setTotalDuration(e.currentTarget.duration);
        }}
        onTimeUpdate={(e) => {
          setCurrentTime(e.currentTarget.currentTime);
        }}
      />

      <PlayerControls
        isPlaying={isPlaying}
        onPreviousTrack={previousTrack}
        onRewind={rewindTenSeconds}
        onTogglePlay={togglePlay}
        onForward={forwardTenSeconds}
        onNextTrack={nextTrack}
      />

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
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-amber-400"
        />
      </div>

    </div>
  );
}