'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, RotateCcw, Zap } from 'lucide-react'

export default function Home() {
  const [count, setCount] = useState(0)

  const pokemons = [
    { name: 'Beldum', id: 374, size: 70 },
    { name: 'Metang', id: 375, size: 80 },
    { name: 'Metagross', id: 376, size: 110 },
    { name: 'M-Metagross', id: 10076, size: 120 },
  ]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-white p-6 overflow-hidden">
      
      {/* Detalhe de fundo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-600 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-center mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Zap className="text-blue-400 fill-blue-400" size={20} />
          <span className="tracking-[0.3em] uppercase text-xs font-bold text-blue-400">Steel / Psychic Type</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400 tracking-tighter">
          METAGROSS <span className="text-blue-500">LABS</span>
        </h1>
      </motion.div>

      {/* Evoluções com Hover Effect */}
      <div className="z-10 flex items-center gap-2 md:gap-8 mb-16 flex-wrap justify-center px-4 py-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
        {pokemons.map((pkmn, index) => (
          <div key={pkmn.id} className="flex items-center gap-2 md:gap-8">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn.id}.png`}
                alt={pkmn.name}
                width={pkmn.size}
                height={pkmn.size}
                className="relative drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />
            </motion.div>
            {index < pokemons.length - 1 && (
              <span className="text-slate-600 font-light text-xl">/</span>
            )}
          </div>
        ))}
      </div>

      {/* Card do Contador */}
      <motion.div 
        layout
        className="z-10 bg-slate-900/40 backdrop-blur-xl p-1 w-full max-w-sm rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="bg-slate-900/80 rounded-[2.3rem] p-10 flex flex-col items-center">
          
          <AnimatePresence mode="wait">
            <motion.p
              key={count}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-8xl font-black mb-10 text-white tabular-nums tracking-tighter"
            >
              {count}
            </motion.p>
          </AnimatePresence>

          <div className="grid grid-cols-3 gap-4 w-full">
            <button
              onClick={() => setCount(count - 1)}
              className="flex items-center justify-center aspect-square bg-slate-800 rounded-2xl hover:bg-red-500/20 hover:text-red-400 border border-white/5 transition-all active:scale-95"
            >
              <Minus size={24} />
            </button>

            <button
              onClick={() => setCount(0)}
              className="flex items-center justify-center aspect-square bg-slate-800 rounded-2xl hover:bg-slate-700 border border-white/5 transition-all active:scale-95"
            >
              <RotateCcw size={24} />
            </button>

            <button
              onClick={() => setCount(count + 1)}
              className="flex items-center justify-center aspect-square bg-blue-600 rounded-2xl hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-95"
            >
              <Plus size={24} />
            </button>
          </div>
        </div>
      </motion.div>

    </main>
  )
}