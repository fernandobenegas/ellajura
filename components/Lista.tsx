"use client";

export default function Lista() {
  return (
    <section  className="w-full py-10 px-4 bg-[#0b0b0b] ] bg-no-repeat bg-center bg-cover">

      {/* 📱 PRICE CARD MOBILE */}
      <div className="block mt-8 w-full max-w-md mx-auto">
        <div className="bg-[#1a150d]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-[0_0_30px_rgba(212,175,55,0.15)]">

          <h3 className="text-[#f5e6c8] text-base font-semibold mb-3 text-center underline underline-offset-4 decoration-[#d4af37]  ">
            Lista de precios
          </h3>

          <div className="space-y-2 text-lg text-[#e8cfae]">

            <div className="flex justify-between border-b border-white/10 pb-1">
              <span>🥐Medialunas saladas 1 docena</span>
              <span className="text-[#d4af37]">$5000</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-1">
              <span>🥐Medialunas saladas 1/2 docena</span>
              <span className="text-[#d4af37]">$2500</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-1">
              <span>🥐 Medialunas rellenas D/leche 1 docena</span>
              <span className="text-[#d4af37]">$6500</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-1">
              <span>🥐 Medialunas rellenas D/leche 1/2 docena</span>
              <span className="text-[#d4af37]">$3500</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-1">
              <span>🥐 Medialunas con Jamon & Queso 1 docena</span>
              <span className="text-[#d4af37]">$6500</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-1">
              <span>🥐 Medialunas con Jamon & Queso 1/2 docena</span>
              <span className="text-[#d4af37]">$3500</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-1">
              <span>🍪 Biscochos 1 docena</span>
              <span className="text-[#d4af37]">$5000</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-1">
              <span>🍪 Biscochos 1 docena</span>
              <span className="text-[#d4af37]">$2500</span>
            </div>

            <div className="flex justify-between pt-2 font-semibold">
              <span>Combo</span>
              <span className="text-[#d4af37]">$4500</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}