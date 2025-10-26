import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KategorijeRadionica from "./components/KategorijeRadionica";
import Kalendar from "./components/Kalendar";
import HowWeWork from "./components/HowWeWork";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <KategorijeRadionica />
      <Kalendar />
      <HowWeWork />
      <Gallery />
      <CTA />
    </main>
  );
}
