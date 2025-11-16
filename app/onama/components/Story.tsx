import Link from "next/link";
import React from "react";

const Story = () => {
  return (
    <section className="section-overlay-b section-padding pb-20">
      <div className="flex flex-col lg:flex-row-reverse items-center w-full gap-8 lg:gap-12 mb-12">
        <div className="flex-1 w-full text-center lg:text-left">
          <h1 className="title text-gradient shadow-pink-text">Naša priča</h1>
          <p className="subtitle mx-auto lg:mx-0">
            Što je Tipsy Muse? Sve je počelo s idejom koja nam je sjedila u
            glavi duže nego je pristojno priznati - što ako se želimo zabaviti
            bez prevrtanja jedno te istih priča iz kafića ali nam se neda ići u
            prezaglušen klub? Što ( i gdje ) raditi nešto PO PRVI PUT bez obveza
            i pritiska? Krenulo je sa slikanjem jer smo htjeli da nam radionice
            budu manje stres a više - izlazak? Bez neugodne tišine, moranja,
            ukočenosti i pritiska da svi budemo "jednako savršeni". Nismo htjeli
            ni imati samo vino, htjeli smo imati NAJBOLJA vina. I spojiti
            fenomenalne butelje, kompletne strance, neiskusne individualce sa
            dobrom vibrom i osjećajem pripadnosti. Htjeli smo stvoriti prostor u
            kojem se ljudi osjećaju "kao kod kuće" a ne u nekoj galeriji, htjeli
            smo da se opuštate, družite i stvarate i da kompletno zaboravite na
            rutinu i obaveze "vanjskog svijeta" na barem 2 sata. Tipsy Muse je
            nastao iz jednostavne želje da se prestanemo shvaćati tako ozbiljno.
            Da se više smijemo manje stresiramo, da pokušamo nešto po prvi put i
            pritom se odlično zabavimo. Da odemo kući malo više Tipsy i malo
            manje opterećeni. Kod nas nema prazne čaše, nema loše slike -
            šminke, nema pritiska - ima puno razumjevanja, vina i dobre
            energije.
          </p>
          <div className="w-fit mx-auto sm:mx-0">
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
              alt="Sudionice na wine & paint radionici u Tipsy Muse studiju - kreativno slikanje uz vino u Zagrebu"
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
