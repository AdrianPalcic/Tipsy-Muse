"use client";

import { radionice } from "@/app/constants";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import { Calendar, CheckCircle, MapPin, User } from "lucide-react";

const Body = ({ slug }: { slug: string }) => {
  const [radionica, setRadionica] = useState<Radionice | null>(null);

  const fetchRadionicaBySlug = (slug: string): Radionice | null => {
    const found = radionice.find((r) => r.slug === slug);
    return found || null;
  };

  useEffect(() => {
    const fetchedRadionica = fetchRadionicaBySlug(slug);
    setRadionica(fetchedRadionica);
  }, [slug]);

  if (!radionica) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-white text-2xl">Radionica nije pronađena...</p>
      </main>
    );
  }

  const freeSpace = radionica.kapacitet - radionica.rezervirano;

  return (
    <main>
      <Hero
        image={radionica.image}
        title={radionica.title}
        description={radionica.description}
        kategorija={radionica.kategorija}
      />
      <section className="section-overlay-a section-padding pt-20 px-2 sm:px-12 border-t-3 border-secondary">
        <div className="flex gap-6 lg:flex-row flex-col ">
          <div className="flex-1">
            <div className="radionica-stats shadow-pink grid grid-cols-1 sm:grid-cols-2 gap-y-6 ">
              <div className="flex gap-4">
                <Calendar className="text-primary" />
                <div className="flex flex-col gap-1">
                  <h4 className="text-2xl font-luckiest-guy text-white">
                    Datum
                  </h4>
                  <p className="text-white text-[16px]">{radionica.date}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <User className="text-primary" />
                <div className="flex flex-col gap-1">
                  <h4 className="text-2xl font-luckiest-guy text-white">
                    Dostupnost
                  </h4>
                  <p className="text-white text-[16px]">
                    {freeSpace} mjesta preostalo
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-primary" />
                <div className="flex flex-col gap-1">
                  <h4 className="text-2xl font-luckiest-guy text-white">
                    Lokacija
                  </h4>
                  <p className="text-white text-[16px]">{radionica.lokacija}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Calendar className="text-primary" />
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg sm:text-2xl font-luckiest-guy text-white">
                    Vrijeme
                  </h4>
                  <p className="text-white text-[16px]">{radionica.time}</p>
                </div>
              </div>
            </div>
            <div className="radionica-stats shadow-pink">
              <div className="flex gap-3">
                <CheckCircle className="text-fourth" size={40} />
                <h2 className="text-white text-2xl sm:text-4xl">
                  Što čemo raditi?
                </h2>
              </div>
              <div className="px-6 mt-4">
                <ul className="list-disc text-white font-semibold sm:text-xl text-lg">
                  {radionica.doing.map((thing) => (
                    <li className="pb-2" key={thing}>
                      {thing}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="radionica-stats shadow-pink">
              <div className="flex gap-3">
                <CheckCircle className="text-primary" size={40} />
                <h2 className="text-white text-2xl sm:text-4xl">
                  Što je uključeno?
                </h2>
              </div>
              <div className="px-6 mt-4">
                <ul className="list-disc text-white font-semibold sm:text-xl text-lg">
                  {radionica.ukljuceno.map((thing) => (
                    <li className="pb-2" key={thing}>
                      {thing}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="radionica-stats shadow-pink ">
              <div className="mb-16">
                <h2 className="text-white text-2xl sm:text-4xl mb-2">
                  Voditeljica Radionice
                </h2>
                <h3 className="heading-three">Tamara Neumann</h3>
              </div>
              <div>
                <p className="subtitle mb-0">Nešto o vama...</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="radionica-stats mb-0 shadow-pink flex flex-col items-center">
              <span className="text-white/70 mb-4">Cijena</span>
              <h2 className="text-6xl">€{radionica.cijena}</h2>
              <span className="text-white/70 my-4">Po osobi</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;
