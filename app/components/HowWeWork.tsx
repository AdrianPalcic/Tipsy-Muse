import React from "react";
import { howWeWork } from "../constants";
import Link from "next/link";

const HowWeWork = () => {
  return (
    <section className="section-overlay-b section-padding">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="title text-gradient text-center shadow-pink-text">
          SVE ŠTO STVORITE - VRIJEDI!
        </h1>
        <p className="subtitle text-center max-w-7xl">
          Mi stavljamo vino u centar kreativne priče, pa smo se pobrinuli da
          uživaš u najboljim etiketama naših odabranih vinskih partnera. Što god
          da odabereš od naših radionica - sigurni smo da ćemo te inspirirati
          ili BAREM dobro nasmijati
        </p>
        <Link href="/radionice" className="w-fit">
          <button className="button red">Pretraži Naše Radionice</button>
        </Link>

        <div className="flex flex-col lg:flex-row gap-6 mt-10">
          {howWeWork.map((work) => (
            <div key={work.id} className="card shadow-blue">
              <h1 className="text-6xl text-secondary shadow-blue-text text-center mb-4">
                {work.id}
              </h1>
              <h1 className="text-primary text-4xl shadow-pink-text text-center mb-6">
                {work.text}
              </h1>
              <p className="subtitle text-center">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
