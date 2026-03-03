"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Servicios", href: "#servicios" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold tracking-widest text-pink-500 drop-shadow-[0_0_10px_#ff00ff]">
              Ambiente Digital
            </h1>
            <span className="h-[2px] w-full bg-pink-500 shadow-[0_0_12px_#ff00ff]"></span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Button - Blanco Eléctrico Neon */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white drop-shadow-[0_0_12px_#ffffff] hover:scale-110 transition"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Overlay Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-3xl font-bold text-white drop-shadow-[0_0_15px_#00ffff] hover:text-cyan-400 transition mb-8"
              >
                {link.name}
              </motion.a>
            ))}

            {/* Glow decorativo */}
            <div className="absolute bottom-20 w-40 h-40 bg-white blur-3xl opacity-10 rounded-full"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}