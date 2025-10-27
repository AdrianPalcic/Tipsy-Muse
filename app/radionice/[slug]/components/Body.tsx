"use client";

import { radionice } from "@/app/constants";
import { useEffect, useState } from "react";

const Body = ({ slug }: { slug: string }) => {
  const [radionica, setRadionica] = useState<Radionice | null>(null);

  // Function to "fetch" radionica by slug
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

  return (
    <main>
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[70vh] sm:min-h-[90vh] flex items-end pt-32 pb-12 px-4 sm:px-8 md:px-12 bg-cover bg-center"
        style={{
          backgroundImage: `url('${radionica.image}')`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(38, 2, 76, 0) 0%, 
              rgba(38, 2, 76, 0.3) 40%, 
              rgba(38, 2, 76, 0.7) 70%, 
              rgba(38, 2, 76, 1) 100%)`,
          }}
        />

        {/* Content at Bottom Left */}
        <div className="relative z-10 max-w-7xl w-full">
          <div className="max-w-3xl">
            <span className="tag ">{radionica.kategorija}</span>
            <h1 className="title my-2 text-secondary shadow-blue-text">
              {radionica.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-lg max-w-2xl">
              {radionica.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;
