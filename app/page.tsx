import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KategorijeRadionica from "./components/KategorijeRadionica";
import Kalendar from "./components/Kalendar";
import HowWeWork from "./components/HowWeWork";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <KategorijeRadionica />
      <Kalendar />
      <HowWeWork />
    </main>
  );
}
