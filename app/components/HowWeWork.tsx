import React from "react";
import { howWeWork } from "../constants";
import Link from "next/link";

const HowWeWork = () => {
  return (
    <section className="section-overlay-b section-padding">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="title text-gradient text-center shadow-pink-text">
          How The Magic Happens
        </h1>
        <p className="subtitle text-center">
          Malo vina, puno ideja. Tipsy Muse spaja kreativnost, razgovor i
          umjetnost — jer najbolje misli ne dolaze za stolom, nego između
          gutljaja. Otkrij radionice koje bude inspiraciju i rezerviraj svoje
          mjesto za dozu umjetnosti uz čašu vina.
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
