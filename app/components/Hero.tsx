"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { screenshots } from "../constants";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroImages = screenshots.slice(0, 6);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % heroImages.length
        );
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="hero"
      className="section-overlay-a py-32 lg:py-44 px-4 sm:px-8 lg:px-16"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
        <div className="flex-1 w-full text-center lg:text-left">
          <h1 className="title text-gradient shadow-pink-text">
            OPUSTI SE, <br />
            STVARAJ I UŽIVAJ
          </h1>
          <p className="subtitle mx-auto lg:mx-0">
            Malo vina, puno ideja. Tipsy Muse spaja kreativnost, razgovor i
            umjetnost — jer najbolje misli ne dolaze za stolom, nego između
            gutljaja. Otkrij radionice koje bude inspiraciju i rezerviraj svoje
            mjesto za dozu umjetnosti uz čašu vina.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href={"/radionice"} className="w-fit">
              <button className="button blue w-full sm:w-auto">
                Naše Radionice
              </button>
            </Link>
            <Link href={"/kontakt"} className="w-fit">
              <button className="button red w-full sm:w-auto">
                Kontaktiraj nas
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:flex-1 h-[300px] sm:h-[400px] lg:h-[600px] relative overflow-hidden">
          <img
            src={heroImages[currentImageIndex]}
            alt="Wine & art zabava"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
