import React from "react";
import { kategorije } from "../constants";
import Link from "next/link";

const KategorijeRadionica = () => {
  return (
    <section
      id="kategorije-radionica"
      className="section-overlay-b section-padding"
    >
      <div className="   mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center w-full gap-8 lg:gap-12 mb-12">
          <div className="flex-1 w-full text-center lg:text-left">
            <h1 className="title text-gradient shadow-pink-text">
              Tipsy Radionice
            </h1>
            <p className="subtitle mx-auto lg:mx-0">
              Vino nam je osnova, konstanta i uvijek izvrsna kvaliteta. A da
              bismo ti pružili najbolje iskustvo opuštanja i stvaralaštva - za
              tebe smo pripremili asortiman kreativnih opcija da otkriješ svoj
              talent ili se dooooobro nasmiješ pokušaju
            </p>
            <div className=" mx-auto sm:mx-0 flex justify-center align-center w-full">
              <Link href="/radionice" className="w-fit ">
                <button className="button blue w-full sm:w-auto">
                  Pogledaj radionice
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center flex-1 w-full relative">
            <div className=" h-[300px] sm:h-[400px] lg:h-[500px]">
              <img
                src="/women.png"
                alt="Dvije dame na wine & art zabavi"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {kategorije.map((category) => (
            <div
              key={category.name}
              className="card shadow-pink flex flex-col items-center rounded-md"
            >
              <div className="w-full max-w-[220px] mx-auto">
                <img
                  src={category.img}
                  alt={`Tipsy Muse | ${category.name}  `}
                  className="mix-blend-lighten w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="heading-three mb-4">{category.name}</h3>
              <p className="text-center text-white text-base sm:text-lg">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KategorijeRadionica;
