"use client";

import React, { useState, useEffect } from "react";

import { screenshots } from "../constants";

const GalerijaPage = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / window.innerHeight) * 100;
      setShowScrollTop(scrollPercent > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openFullscreen = (image: string) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <section className="section-overlay-a section-padding pt-40 overflow-x-hidden">
      <div className=" mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="title shadow-pink-text">GALERIJA</h1>
          <p className="subtitle text-center">
            Pridružite se našim kreativnim radionicama i načinite tajno
            savršenih pića
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4 md:gap-6">
          {screenshots.map((image, index) => {
            const patternIndex = index % 7;
            let gridClasses = "";

            switch (patternIndex) {
              case 0:
                gridClasses = "md:col-span-2 md:row-span-1";
                break;
              case 1:
                gridClasses = "md:col-span-1 md:row-span-1";
                break;
              case 2:
                gridClasses = "md:col-span-1 md:row-span-1";
                break;
              case 3:
                gridClasses = "md:col-span-2 md:row-span-1";
                break;
              case 4:
                gridClasses = "md:col-span-1 md:row-span-1";
                break;
              case 5:
                gridClasses = "md:col-span-1 md:row-span-1";
                break;
              case 6:
                gridClasses = "md:col-span-1 md:row-span-1";
                break;
              default:
                gridClasses = "md:col-span-1 md:row-span-1";
            }

            return (
              <div
                key={index}
                className={`${gridClasses} h-[350px] md:h-[500px]`}
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div
                  className={`
                     relative overflow-hidden rounded-lg border-4 border-secondary
                     transition-all duration-300 h-full w-full cursor-pointer
                     ${
                       hoveredImage === index ? "scale-105  border-primary" : ""
                     }
                   `}
                  onClick={() => openFullscreen(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    loading="lazy"
                    className={`
                       w-full h-full object-cover
                       transition-transform duration-500
                       ${hoveredImage === index ? "scale-110" : "scale-100"}
                     `}
                  />

                  <div
                    className={`
                       absolute inset-0  from-tetriary/80 to-transparent
                       transition-opacity duration-300
                       ${hoveredImage === index ? "opacity-100" : "opacity-0"}
                     `}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary hover:bg-secondary border-4 border-black rounded-full flex items-center justify-center  transition-all duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-8 right-8 w-12 h-12 bg-primary hover:bg-secondary border-4 border-black rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Close fullscreen"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain border-4 border-secondary rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GalerijaPage;
