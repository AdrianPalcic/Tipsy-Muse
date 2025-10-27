import { radioniceStats } from "@/app/constants";
import Link from "next/link";
import React from "react";

const Cards = () => {
  return (
    <section className="section-overlay-b section-padding">
      <h1 className="title shadow-pink-text text-center">
        Zašto svi vole naše radionice
      </h1>
      <p className="subtitle text-center">
        Jer kod nas ne slikaš samo — stvaraš uspomene (i možda malo proliješ
        vino).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {radioniceStats.map((radionica) => (
          <div
            className="flex flex-col sm:flex-row items-center bg-tetriary rounded-md border-3 border-black shadow-pink card p-3"
            key={radionica.title}
          >
            <div className="flex-1">
              <img
                src={radionica.img}
                alt={radionica.title}
                className="w-full h-full object-cover mix-blend-lighten"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h3 className="heading-three mb-4 text-center sm:text-left">
                {radionica.title}
              </h3>
              <p className="subtitle text-[16px] text-center sm:text-left">
                {radionica.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/radionice" className="w-fit mt-12 mx-auto">
        <button className="button blue">Dođi se uvjeriti</button>
      </Link>
    </section>
  );
};

export default Cards;
