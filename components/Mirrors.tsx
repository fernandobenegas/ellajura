"use client";

import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

const mirrors = [
  {
    src: "/mirror1.png",
    review: "Increíble experiencia, fue el centro de atención del evento.",
  },
  {
    src: "/mirror2.png",
    review: "Las fotos quedaron espectaculares, súper recomendable.",
  },
];

export default function Mirrors() {
  return (
    <SectionWrapper>
      <section id="espejos" className="py-24 px-8 bg-black text-white">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16 drop-shadow-[0_0_15px_#00ffff]">
          Espejos Infinitos y Cabinas Espejadas
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {mirrors.map((item, i) => (
            <div
              key={i}
              className="p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
            >
              <div className="bg-black rounded-2xl p-6">
                <Image
                  src={item.src}
                  alt="Espejo infinito"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover mb-6"
                />

                <p className="text-gray-300 italic">
                  "{item.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}