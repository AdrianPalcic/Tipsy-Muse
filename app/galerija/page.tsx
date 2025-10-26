"use client";

import React, { useState } from "react";

import { screenshots } from "../constants";

const GalerijaPage = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <section className="section-overlay-a section-padding pt-40">
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
                     transition-all duration-300 h-full w-full
                     ${
                       hoveredImage === index ? "scale-105  border-primary" : ""
                     }
                   `}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
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
    </section>
  );
};

export default GalerijaPage;
