import React from "react";

const CTA = () => {
  return (
    <section className="section-overlay-b section-padding">
      <div className="w-full shadow-pink border-3 bg-tetriary px-6 py-12 border-solid border-black rounded-md flex flex-col items-center">
        <h1 className="title shadow-pink-text text-center mb-5">
          Želite biti dio Priče
        </h1>
        <p className="subtitle mb-5">
          Pridružite se našim radionicama i stvorite vlastite nezaboravne
          trenutke
        </p>
        <button className="button yellow">Pogledajte naše radionice</button>
      </div>
    </section>
  );
};

export default CTA;
