"use client";

import ParticlesBackground from "@/components/ParticlesBackground";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Instagram } from "lucide-react";



export default function Hero() {

  const [time, setTime] = useState("");

useEffect(() => {
  const updateTime = () => {
    const now = new Date();

    const formatted = now.toLocaleString("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });

    setTime(formatted);
  };

  updateTime();
  const interval = setInterval(updateTime, 60000);

  return () => clearInterval(interval);
}, []);
  return (
    <SectionWrapper>
      <section className="relative h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6 overflow-hidden">

        {/* 🔥 LOGO */}
       <div className="relative z-20 flex flex-col items-center mb-6">

  <div className="relative w-52 h-52 md:w-62 md:h-62 rounded-full overflow-hidden border border-white/10 shadow-lg">

    <Image
      src="/logo.jpeg"
      alt="Logo"
      fill
      className="object-cover"
    />

  </div>

</div>

{/* INSTAGRAM */}
<div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-2">

  {/* Fecha y hora */}
  <div className="text-sm text-[#f3e7d3]/70">
    {time}
  </div>

  {/* Instagram */}
  <a
    href="https://instagram.com/Ellajura.ok"
    target="_blank"
    className="
      flex items-center gap-2
      text-[#c89b6a]
      text-sm
      hover:text-white
      transition
    "
  >
    <Instagram size={20} />
    <span>Ellajura.ok</span>
  </a>

</div>

        {/* Partículas */}
        <ParticlesBackground />
      <div className="absolute top-6 right-6 z-20 text-right text-sm text-[#f3e7d3]/70">
        {time}
      </div>

        {/* Contenido */}
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-italict text-white flex items-center justify-center gap-3">
            <span>🥐</span>
            <span className="text-[#c9b6a] font-serif italic underline drop-shadow-[0_0_10px_#ff00ff]">
  Ella Jura
</span>
            <span>☕</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            El aroma irresistible de nuestras medialunas recién horneadas y la crocancia única de los bizcochos
            te esperan para acompañar cada momento. Pedí fácil, recibí caliente y disfrutá la tradición.
          </p>
        </div>

      </section>
    </SectionWrapper>
  );
}