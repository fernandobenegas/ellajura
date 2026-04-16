import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});




export const metadata = {
  title: "Ella Jura - Medialunas y Bizcochos",
  description:
    "Produccion y ventas de medialunas y bischochos. Pedí fácil, recibí caliente y disfrutá la tradición que convierte un simple desayuno en un recuerdo inolvidable.",
 
  authors: [{ name: "Ella jura" }],
  creator: "Ella jura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[] text-[#1a150d]">
        {children}
        <Analytics />
        <SpeedInsights /> //que tan rapida es mi web, que tan optimizada esta, que tan bien rankea en google, etc
      </body>
    </html>
  );
}