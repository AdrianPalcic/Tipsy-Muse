import React from "react";

const Hero = () => {
  return (
    <section className="section-overlay-a section-padding pt-40 border-b-3 border-primary w-full">
      <div className="flex justify-center items-center gap-12 h-[50vh]">
        <div className="flex-1 h-full hidden lg:block">
          <img
            className="w-full h-full object-cover"
            src="/glass.png"
            alt="Čaša vina"
          />
        </div>
        <div>
          <h1 className="title shadow-pink-text text-center">
            Tipsy <br /> Radionice
          </h1>
          <p className="subtitle text-center">
            Pridružite se našim kreativnim radionicama i naučite tajne savršenih
            pića
          </p>
        </div>
        <div className="flex-1 h-full hidden lg:block">
          <img
            className="w-full h-full object-cover mix-blend-lighten"
            src="/item1.png"
            alt="Zabava na Wine and Paint"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
