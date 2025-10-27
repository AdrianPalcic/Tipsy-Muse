import Link from "next/link";
import React from "react";

const Story = () => {
  return (
    <section className="section-overlay-b section-padding pb-20">
      <div className="flex flex-col lg:flex-row-reverse items-center w-full gap-8 lg:gap-12 mb-12">
        <div className="flex-1 w-full text-center lg:text-left">
          <h1 className="title text-gradient shadow-pink-text">Naša priča</h1>
          <p className="subtitle mx-auto lg:mx-0">
            Sve je počelo uz čašu vina i ideju — što kada bi slikanje bilo više
            zabava, a manje ozbiljan zadatak? Htjeli smo stvoriti prostor u
            kojem svatko može pustiti mašti na volju, smijati se, proliti koju
            kap boje (ili vina) i jednostavno uživati u trenutku. Tako je nastao
            Tipsy Muse — spoj umjetnosti, druženja i dobrih vibracija. Kod nas
            ne moraš biti umjetnik da bi stvarao; dovoljno je da dođeš otvorenog
            uma i prazne čaše.
          </p>
          <div className="w-fit">
            <Link href="/radionice" className="w-fit">
              <button className="button blue w-full sm:w-auto">
                Dođi se zabaviti kod nas!
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center flex-1 w-full relative">
          <div className=" h-[300px] sm:h-[400px] lg:h-[500px]">
            <img
              src="/panel.png"
              alt="Dvije dame na wine & art zabavi"
              className="w-full h-full object-cover rounded-lg mix-blend-lighten"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
