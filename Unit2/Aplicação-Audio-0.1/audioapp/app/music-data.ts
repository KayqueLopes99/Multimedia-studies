// Representa a lista de reprodução (Playlist) que será lida.
import { Track } from "./music-types";


export const PLAYLIST: Track[] = [
  { 
    id: 1, 
    name: "Venusaur", 
    url: "/audio.mp3", 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" 
  },
  { 
    id: 2, 
    name: "Charizard", 
    url: "/audio-1.mp3", 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" 
  },
  { 
    id: 3, 
    name: "Blastoise", 
    url: "/audio-2.mp3", 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" 
  },
  { 
    id: 4, 
    name: "Pikachu", 
    url: "/audio-3.mp3", 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
  },
];