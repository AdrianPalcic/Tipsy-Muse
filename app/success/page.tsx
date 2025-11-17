import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="section-overlay-a section-padding pt-44">
        <h1 className="title shadow-pink-text text-center">Uspješna Uplata!</h1>
        <p className="subtitle text-center">
          Na mail primate potvrdu o uplati, to je Vaša ulaznica
        </p>
        <div className="w-full flex justify-center">
          <Link href="/naslovna">
            <button className="button blue">Povratak na Naslovnu</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;
