"use client";

import { radionice } from "@/app/constants";
import { useEffect, useState, useRef } from "react";
import Hero from "./Hero";
import {
  Calendar,
  CheckCircle,
  MapPin,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { parseDate } from "@/app/utils";
import { screenshots } from "@/app/constants";
import Spinner from "@/app/components/Spinner";

const Body = ({ slug }: { slug: string }) => {
  const [radionica, setRadionica] = useState<Radionice | null>(null);
  const [istekla, setIstekla] = useState<boolean>(false);
  const [exists, setExists] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const carouselImages = screenshots;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const fetchRadionicaBySlug = (slug: string): Radionice | null => {
    const found = radionice.find((r) => r.slug === slug);
    return found || null;
  };

  useEffect(() => {
    //prvo - provjera je li radionica u prošlosti

    //drugo - provjera je li danas dan radionice

    //Uzeli smo vrijeme radionice koji je string,
    // Onda smo napravili novi dan i postavili ga na ponoc
    // Tada smo uzeli sate i minute od stringa iz radionce i pretvorili u broj,
    // Extraactali smo te vrijednosti
    //Stvorili novo vrijeme radionince koje se odnosi na danas, ali po njenom vremenu
    setIsLoading(true);
    const fetchedRadionica = fetchRadionicaBySlug(slug);
    if (!fetchedRadionica) {
      setIsLoading(false);
      return;
    }
    setRadionica(fetchedRadionica);
    setIsLoading(false);
    const radionicaDateString = fetchedRadionica.date;
    const radionicaTimeString = fetchedRadionica.time;
    const [hours, minutes] = radionicaTimeString.split(":").map(Number);

    const today = new Date();
    const radionicaTime = new Date(today);
    radionicaTime.setHours(hours, minutes, 0, 0);

    const radionicaDate = new Date(
      radionicaDateString.split(".").reverse().join("-")
    );
    radionicaDate.setHours(hours, minutes, 0, 0);

    if (radionicaDate.toDateString() === today.toDateString()) {
      const currentTime = new Date();

      if (radionicaTime <= currentTime) {
        setIstekla(true);
      } else {
        const timeDifference = radionicaTime.getTime() - currentTime.getTime();
        const remainingMinutes = Math.ceil(timeDifference / (1000 * 60));

        if (remainingMinutes <= 30) {
          setIstekla(true);
        }
      }
    } else if (radionicaDate < today) {
      setExists(false);
    }
  }, [slug]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!radionica) {
    return (
      <main className="min-h-screen flex items-center justify-center section-overlay-a">
        <p className="text-white text-2xl">Radionica nije pronađena...</p>
      </main>
    );
  }

  const freeSpace = radionica.kapacitet - radionica.rezervirano;

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      {exists ? (
        <>
          <Hero
            image={radionica.image}
            title={radionica.naslov}
            description={radionica.opis}
            kategorija={radionica.kategorija}
          />
          <section className="section-overlay-a section-padding pt-20 px-2 sm:px-12 border-t-3 border-b-3 border-secondary pb-15">
            <div className="flex gap-6 lg:flex-row flex-col ">
              <div className="flex-[1.5]">
                <div className="radionica-stats shadow-pink grid grid-cols-1 sm:grid-cols-2 gap-y-6 ">
                  <div className="flex gap-4">
                    <Calendar className="text-primary" />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-2xl font-luckiest-guy text-white">
                        Datum
                      </h4>
                      <p className="text-white text-[16px]">
                        {radionica.datum}
                      </p>
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
                      <p className="text-white text-[16px]">
                        {radionica.lokacija}
                      </p>
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
                      <li className="pb-2">{radionica.opisRada}</li>
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
                      <li className="pb-2">{radionica.ukljuceno}</li>
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
                  {!istekla ? (
                    <>
                      <span className="text-white/70 mb-4">Cijena</span>
                      <h2 className="text-6xl">€{radionica.cijena}</h2>
                      <span className="text-white/70 my-4">Po osobi</span>
                      <Link href="/" className="w-full">
                        <button className="button red w-full">
                          Prijavi se sada
                        </button>
                      </Link>
                      <div className="bg-red-900/60 border-3 border-red-600 w-full py-3 px-6 my-4 flex items-center justify-center font-luckiest-guy text-red-600 text-[16px]">
                        {" "}
                        Samo još {freeSpace} mjesta
                      </div>

                      <div className="border-t-2 border-b-2 border-secondary/70 py-4 w-full mb-4">
                        <div className="flex justify-between text-secondary mb-4">
                          <p className="font-luckiest-guy">Trajanje</p>
                          <span className="text-[16px]">
                            {radionica.trajanje}h
                          </span>
                        </div>
                        <div className="flex justify-between text-secondary mb-4">
                          <p className="font-luckiest-guy">Kapacitet</p>
                          <span className="text-[16px]">
                            {radionica.kapacitet}
                          </span>
                        </div>
                        <div className="flex justify-between text-secondary">
                          <p className="font-luckiest-guy">Lokacija</p>
                          <span className="text-[16px]">
                            {radionica.lokacija}h
                          </span>
                        </div>
                      </div>
                      <Link href="/radionice" className="w-full">
                        <div className="w-full py-3 px-6 border border-secondary flex items-center justify-center font-luckiest-guy text-secondary duration-200 transition-colors hover:bg-secondary/30">
                          Natrag na radionice
                        </div>
                      </Link>
                    </>
                  ) : (
                    <>
                      <h2 className="text-3xl text-red-700 text-center mb-2">
                        Nažalost, vrijeme rezervacija je završeno
                      </h2>
                      <p className="subtitle mb-2">
                        Pogledajte neke druge radionica!
                      </p>
                      <Link href="/radionice" className="w-full">
                        <div className="w-full py-3 px-6 border border-secondary flex items-center justify-center font-luckiest-guy text-secondary duration-200 transition-colors hover:bg-secondary/30">
                          Natrag na radionice
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="section-overlay-b section-padding pt-10">
            <div className=" mx-auto mb-10">
              <div className="relative">
                {/* Scrollable Container */}
                <div
                  ref={scrollContainerRef}
                  className="flex gap-4 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {carouselImages.map((src, idx) => (
                    <div
                      key={`${src}-${idx}`}
                      className="shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                    >
                      <div className="relative overflow-hidden rounded-lg shadow-pink group aspect-4/3">
                        <img
                          src={src}
                          alt={`Radionica galerija ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={scrollToPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-10 shadow-lg"
                  aria-label="Previous images"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={scrollToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-10 shadow-lg"
                  aria-label="Next images"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            <div className="card shadow-pink max-w-6xl mx-auto mt-10">
              <h1 className="title text-center shadow-pink-text">
                Imate Pitanja?
              </h1>
              <p className="subtitle text-center">
                Naš tim je tu da vam pomogne! Kontaktirajte nas za sve dodatne
                informacije.
              </p>
              <div className="w-fit mx-auto">
                <Link href="/kontakt" className="w-fit mx-auto">
                  <button className="button red">Kontaktirajte nas</button>
                </Link>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="section-overlay-a mx-auto  py-44">
            <h1 className="title text-red-700  text-center">
              Ova radionica više ne postoji!
            </h1>
            <div className="w-full flex justify-center">
              <Link href="/radionice" className="w-fit ">
                <button className="button blue">
                  Pogledajte neke druge radionice
                </button>
              </Link>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Body;
