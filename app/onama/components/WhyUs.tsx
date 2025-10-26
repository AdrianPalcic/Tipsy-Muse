import { stats } from "@/app/constants";
import React from "react";

const WhyUs = () => {
  return (
    <section className="section-overlay-a section-padding">
      <h1 className="title shadow-pink-text text-center line inline-block relative w-full">
        Naša Misija
      </h1>
      <p className="subtitle text-center max-w-4xl mx-auto">
        "Stvoriti prostor gdje se umjetnost susreće sa životom, gdje kreativnost
        cvjeta bez pritiska, a ljudi se povezuju kroz zajedničku strast prema
        lijepom. Tipsy Muse nije samo studio - to je zajednica koja slavi
        jedinstvenost svakog pojedinca."
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center">
        {stats.map((stat) => (
          <div
            key={stat.number}
            className="flex flex-col items-center sm:items-normal mb-3"
          >
            <h1 className="text-secondary shadow-blue-text text-3xl sm:text-4xl md:text-7xl">
              {stat.number}
            </h1>
            <h3 className="text-white text-xl">{stat.text}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
