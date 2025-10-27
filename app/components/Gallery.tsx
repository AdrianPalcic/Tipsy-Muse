import Link from "next/link";
import React from "react";
import { screenshots } from "../constants";

const Gallery = () => {
  return (
    <section className="section-overlay-a section-padding">
      <div className="flex flex-col items-center">
        <h1 className="title shadow-pink-text text-center">
          Naše Šarene Večeri
        </h1>
        <p className="subtitle text-center">
          Malo vina, puno ideja. Tipsy Muse spaja kreativnost, razgovor i
          umjetnost — jer najbolje misli ne dolaze za stolom,{" "}
        </p>
        <Link href="/radionice" className="w-fit">
          <button className="button blue">Dođi se Zabaviti!</button>
        </Link>

        <div className="mt-12 sm:mt-16 lg:mt-20 w-full overflow-hidden">
          <div className="carousel-container">
            <div className="carousel-track">
              {[...Array(13)].map((_, setIndex) =>
                screenshots.map((img, index) => (
                  <div
                    key={`img-set${setIndex}-${index}`}
                    className="carousel-item"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-pink"
                      loading="lazy"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
