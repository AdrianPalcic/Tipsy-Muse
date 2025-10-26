import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="hero" className="section-overlay-a py-40 px-10 flex gap-10">
        <button className="button blue">Radionice</button>
        <button className="button red">Radionice</button>
        <button className="button yellow">Radionice</button>
      </section>
    </main>
  );
}
