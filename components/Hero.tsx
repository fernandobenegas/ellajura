"use client";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";


export default function Hero() {
  return (
    <SectionWrapper>
    <section className="relative h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      
      {/* Partículas */}
      <ParticlesBackground />

      {/* Contenido */}
      <div className="relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-pink-500 drop-shadow-[0_0_20px_#ff00ff]">
          iluminamos tus momentos
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Cartelería y estructuras de neón personalizadas para eventos sociales y corporativos.
        </p>
      </div>

      <a
      href="https://wa.me/5493412167147?text=Hola!%20Quiero%20presupuesto%20para%20un%20cartel%20de%20neón."
      target="_blank"
      className="mt-10 inline-block px-8 py-3 border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition shadow-[0_0_15px_#00ffff]"
    >
      Solicitar presupuesto
    </a>
    </section>
    </SectionWrapper>
  );
  
}