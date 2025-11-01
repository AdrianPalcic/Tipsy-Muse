import Hero from "./components/Hero";
import { festivalPartners, winePartners } from "../constants";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <Hero />
      <section
        id="vinarije"
        className="section-overlay-a section-padding pt-10"
      >
        <h2 className="text-3xl text-primary shadow-pink-text sm:text-5xl text-center mb-6 sm:mb-10">
          Vinski partneri
        </h2>
        <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16 max-w-7xl mx-auto">
          {winePartners.map((partner, index) => (
            <div
              key={partner.id}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-2 lg:gap-12`}
            >
              <div className="flex-1 w-full text-center lg:text-left">
                <h3 className="title text-secondary shadow-blue-text mb-2">
                  {partner.ime}
                </h3>
                <p className="subtitle mx-auto lg:mx-0 max-w-2xl">
                  {partner.opis}
                </p>
              </div>
              <Link
                href={"/"}
                className="w-full lg:flex-1 h-[260px] sm:h-[360px] lg:h-[480px] group"
              >
                <img
                  src={partner.image}
                  alt={partner.ime}
                  className="w-full h-full object-cover shadow-pink rounded-md duration-200 transition-all group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:shadow-[1px_1px_0px_rgba(0,0,0,0)]"
                  loading="lazy"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section
        id="festivali"
        className="section-overlay-b section-padding pt-6"
      >
        <h2 className="text-3xl text-primary shadow-pink-text sm:text-5xl text-center mb-6 sm:mb-10">
          Festivalski partneri
        </h2>
        <div className="flex flex-col gap-2 sm:gap-14 lg:gap-16 max-w-7xl mx-auto">
          {festivalPartners.map((partner, index) => (
            <div
              key={partner.id}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8 lg:gap-12`}
            >
              <div className="flex-1 w-full text-center lg:text-left">
                <h3 className="title text-secondary shadow-blue-text mb-2">
                  {partner.ime}
                </h3>
                <p className="subtitle mx-auto lg:mx-0 max-w-2xl">
                  {partner.opis}
                </p>
              </div>
              <Link
                href="/"
                className="w-full lg:flex-1 h-[260px] sm:h-[360px] lg:h-[480px] group"
              >
                <img
                  src={partner.image}
                  alt={partner.ime}
                  className="w-full h-full object-cover shadow-pink rounded-md duration-200 transition-all group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:shadow-[1px_1px_0px_rgba(0,0,0,0)]"
                  loading="lazy"
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="card shadow-pink max-w-6xl mx-auto mt-10">
          <h1 className="title text-center shadow-pink-text">
            Želite postati naš partner?
          </h1>
          <p className="subtitle text-center">
            Pridružite se našem kreativnom svijetu i postanite dio Tipsy Muse
            zajednice. Bilo da ste vinska kuća, festival ili kreativni brend,
            suradnja s nama znači promociju, inspiraciju i nezaboravno iskustvo
            za sve sudionike naših radionica.
          </p>
          <div className="w-fit mx-auto">
            <Link href="/kontakt" className="w-fit mx-auto">
              <button className="button red">Kontaktirajte nas</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
