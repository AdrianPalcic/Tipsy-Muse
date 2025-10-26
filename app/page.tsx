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
      <Navbar />
      <Hero />
      <KategorijeRadionica />
      <Kalendar />
      <HowWeWork />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
