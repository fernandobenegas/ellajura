"use client";
import SectionWrapper from "@/components/SectionWrapper";
export default function Footer() {
<div className="h-[2px] w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_20px_#ff00ff]"></div>
  return (
    <SectionWrapper>
    <footer className="bg-black text-gray-400 py-16 px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Marca */}
        <div>
          <h3 className="text-2xl font-bold text-pink-500 drop-shadow-[0_0_10px_#ff00ff] mb-4">
            Digital Environment
          </h3>
          <p>
            Cartelería y estructuras de neón personalizadas para eventos
            sociales y corporativos en Rosario.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2">
            <li><a href="#servicios" className="hover:text-pink-400">Servicios</a></li>
            <li><a href="#galeria" className="hover:text-cyan-400">Galería</a></li>
            <li><a href="#contacto" className="hover:text-green-400">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <p>Rosario, Santa Fe</p>
          <p>WhatsApp: +54 9 341 216 7147</p>
          <p>Email:benegasfernando1993@gmail.com</p>
        </div>

      </div>

      <div className="text-center mt-16 text-sm text-gray-600">
        © {new Date().getFullYear()} Digital Environment FB. Todos los derechos reservados.
      </div>
    </footer>
    </SectionWrapper>
  );
  
}
