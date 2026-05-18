// Responsavel pelo estilização do componente visual de cada quadrado de Pokémon que aparece na lista.

import { Track } from "./music-types";

interface TrackButtonProps {
  track: Track;               
  isSelected: boolean;        
  onSelect: (track: Track) => void; 
}

export function TrackButton({ track, isSelected, onSelect }: TrackButtonProps) {
  return (
    
    <button
      onClick={() => onSelect(track)}

      
      className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-colors ${
        isSelected
          ? "border-amber-400 bg-zinc-800" 
          : "border-gray-600 bg-transparent hover:bg-zinc-800" 
      }`}
    >
      
      <img 
        src={track.img} 
        alt={track.name} 
        className="h-12 w-12 object-contain" 
      />
      
      
      <span className={`text-xs font-bold uppercase ${
        isSelected ? "text-amber-400" : "text-gray-400"
      }`}>
        {track.name}
      </span>
    </button>
  );
}