"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Sparkles, ImageIcon, Building2 } from "lucide-react";

const services = [
  {
    title: "Neón personalizado",
    description:
      "Diseñamos y fabricamos carteles LED totalmente personalizados para bodas, cumpleaños y eventos sociales. Adaptamos cada pieza a tu identidad visual.",
    icon: Sparkles,
    glow: "shadow-[0_0_25px_#ff00ff40]",
    border: "border-pink-500/40",
    hoverGlow: "hover:shadow-[0_0_40px_#ff00ff]",
  },
  {
    title: "Espejos Infinitos",
    description:
      "Efectos visuales impactantes con espejos infinitos LED que generan profundidad y elegancia. Perfectos para ambientaciones modernas y premium.",
    icon: ImageIcon,
    glow: "shadow-[0_0_25px_#00ffff40]",
    border: "border-cyan-500/40",
    hoverGlow: "hover:shadow-[0_0_40px_#00ffff]",
  },
  {
    title: "Eventos corporativos",
    description:
      "Instalaciones profesionales para lanzamientos, activaciones y exposiciones empresariales. Iluminación estratégica para posicionar tu marca.",
    icon: Building2,
    glow: "shadow-[0_0_25px_#a855f740]",
    border: "border-purple-500/40",
    hoverGlow: "hover:shadow-[0_0_40px_#a855f7]",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <SectionWrapper>
      <section
        id="servicios"
        className="py-24 px-8 bg-black text-white"
      >
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-16 drop-shadow-[0_0_15px_#ff00ff]">
          Nuestros Servicios
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`p-10 bg-black rounded-2xl border ${service.border} ${service.glow} ${service.hoverGlow} transition duration-500 hover:-translate-y-2`}
              >
                <div className="mb-6">
                  <Icon
                    size={40}
                    className="text-white drop-shadow-[0_0_10px_currentColor]"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href="#contacto"
                  className="inline-block px-6 py-2 text-sm border border-white/30 rounded-full hover:bg-white hover:text-black transition"
                >
                  Solicitar información →
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </SectionWrapper>
  );
}