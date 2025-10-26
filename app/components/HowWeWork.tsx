import React from "react";
import { howWeWork } from "../constants";

const HowWeWork = () => {
  return (
    <section className="section-overlay-b section-padding">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="title text-gradient text-center">
          How The Magic Happens
        </h1>
        <p className="subtitle text-center">
          Malo vina, puno ideja. Tipsy Muse spaja kreativnost, razgovor i
          umjetnost — jer najbolje misli ne dolaze za stolom, nego između
          gutljaja. Otkrij radionice koje bude inspiraciju i rezerviraj svoje
          mjesto za dozu umjetnosti uz čašu vina.
        </p>
        <button className="button red">Pretraži Naše Radionice</button>

        <div className="flex flex-wrap">
          {howWeWork.map((work) => (
            <div key={work.id} className="card">
              <h1 className="text-6xl text-secondary shadow-blue-text">
                {work.id}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
