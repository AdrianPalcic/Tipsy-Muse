import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-overlay-a py-32 lg:py-44 px-4 sm:px-8 lg:px-16"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
        <div className="flex-1 w-full text-center lg:text-left">
          <h1 className="title text-gradient">
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
            <button className="button blue w-full sm:w-auto">
              <Link href="/radionice">Naše Radionice</Link>
            </button>
            <button className="button red w-full sm:w-auto">
              <Link href="/kontakt">Kontaktiraj nas</Link>
            </button>
          </div>
        </div>
        <div className="w-full lg:flex-1 h-[300px] sm:h-[400px] lg:h-[600px]">
          <img
            src="/radionica.card.jpeg"
            alt="Wine & art zabava"
            className="w-full h-full object-cover shadow-pink"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
