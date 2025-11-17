import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="section-overlay-a section-padding pt-44">
        <h1 className="title shadow-blue-text text-secondary text-center">
          Otkazana Uplata
        </h1>
        <p className="subtitle text-center">
          Ili ste otkazali uplatu ili je nešto pošlo po krivu. Svakako
          pogledajte ostatak naših radionica
        </p>
        <div className="w-full flex justify-center gap-6">
          <Link href="/radionice">
            <button className="button blue">Radionice</button>
          </Link>
          <Link href="/naslovna">
            <button className="button red">Naslovna</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;
