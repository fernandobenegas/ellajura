import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import Mirrors from "@/components/Mirrors";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Gallery />
     < Mirrors />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

