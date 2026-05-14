"use client";

import { useState, useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaStepForward, FaStepBackward } from "react-icons/fa";
import { PLAYLIST } from "./music-data";
import { Track } from "./music-types";
import { TrackButton } from "./track-button";

export default function MusicPlayer() {
  // --- ESTADOS (Memórias do componente) ---
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [selectedTrack, setSelectedTrack] = useState<Track>(PLAYLIST[0]);
  const [tempoAtual, setTempoAtual] = useState(0);
  const [duracaoTotal, setDuracaoTotal] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  // --- FUNÇÕES DE CONTROLE ---

  // Play / Pause
  const togglePlay = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // Mudar Volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
  };

  // Escolher uma música específica na lista
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

  // Pular a música no controle deslizante
  const mudarTempo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novoTempo = parseFloat(e.target.value);
    setTempoAtual(novoTempo);
    if (audioRef.current) {
      audioRef.current.currentTime = novoTempo;
    }
  };

  // Pular para a Próxima Música
  const proximaMusica = () => {
    const indexAtual = PLAYLIST.findIndex((track) => track.id === selectedTrack.id);
    const proximoIndex = indexAtual === PLAYLIST.length - 1 ? 0 : indexAtual + 1;
    changeTrack(PLAYLIST[proximoIndex]);
  };

  // Voltar para a Música Anterior
  const musicaAnterior = () => {
    const indexAtual = PLAYLIST.findIndex((track) => track.id === selectedTrack.id);
    const indexAnterior = indexAtual === 0 ? PLAYLIST.length - 1 : indexAtual - 1;
    changeTrack(PLAYLIST[indexAnterior]);
  };

  // Formatar segundos em MM:SS
  const formatarTempo = (tempoEmSegundos: number) => {
    if (isNaN(tempoEmSegundos)) return "00:00";
    const minutos = Math.floor(tempoEmSegundos / 60);
    const segundos = Math.floor(tempoEmSegundos % 60);
    return `${minutos}:${segundos.toString().padStart(2, "0")}`;
  };

  // --- RENDERIZAÇÃO (Visual) ---
  return (
    <div className="flex w-full max-w-[380px] flex-col items-center rounded-[2rem] border border-white/10 bg-zinc-900/90 p-8 backdrop-blur-md shadow-2xl">
      
      {/* Título */}
      <h2 className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
        Pokemon Themes
      </h2>

      {/* Barra de Progresso do Tempo */}
      <div className="w-full flex flex-col gap-2 mt-4">
        <input
          type="range"
          max={duracaoTotal}
          value={tempoAtual}
          onChange={mudarTempo}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-amber-400"
        />
        <div className="flex w-full justify-between text-[10px] font-bold text-zinc-500 tabular-nums">
          <span>{formatarTempo(tempoAtual)}</span>
          <span>{formatarTempo(duracaoTotal)}</span>
        </div>
      </div>

      {/* Áudio Oculto (O "Motor") */}
      <audio
        ref={audioRef}
        src={selectedTrack.url}
        loop
        onLoadedMetadata={(e) => {
          setDuracaoTotal(e.currentTarget.duration);
        }}
        onTimeUpdate={(e) => {
          setTempoAtual(e.currentTarget.currentTime);
        }}
      />

      {/* Controles Principais (Voltar, Play/Pause, Avançar) */}
      <div className="mt-8 mb-4 flex items-center justify-center gap-6">
        <button 
          onClick={musicaAnterior} 
          className="text-zinc-500 transition-colors hover:text-white hover:scale-110"
        >
          <FaStepBackward size={24} />
        </button>

        <button
          onClick={togglePlay}
          className={`group relative flex h-24 w-24 items-center justify-center rounded-full transition-all duration-500 ${
            isPlaying
              ? "bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.3)] scale-105"
              : "bg-white text-black hover:scale-110"
          }`}
        >
          {isPlaying ? <FaPause size={32} /> : <FaPlay size={32} className="ml-2" />}
        </button>

        <button 
          onClick={proximaMusica} 
          className="text-zinc-500 transition-colors hover:text-white hover:scale-110"
        >
          <FaStepForward size={24} />
        </button>
      </div>

      {/* Lista de Músicas */}
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

      {/* Controle de Volume */}
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