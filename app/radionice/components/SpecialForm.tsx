import { Send } from "lucide-react";
import React from "react";

const SpecialForm = () => {
  return (
    <section className="section-overlay-a section-padding">
      <div className="max-w-5xl bg-tetriary border-3 border-black py-12 px-6 mx-auto shadow-blue rounded-md">
        <h3 className="heading-three text-primary mb-2 text-center sm:text-left">
          Želite Privatni Tipsy Muse party?
        </h3>
        <p className="subtitle">Javite nam se ovdje!</p>
        <form action="POST" className="w-full">
          <div className="flex flex-col ">
            <label
              htmlFor="ime"
              className=" text-primary sm:text-2xl text-lg font-bold"
            >
              Ime i Prezime
            </label>
            <input
              type="text"
              required
              id="name"
              name="name"
              placeholder="Vaše Ime i Prezime"
              className="border-2 border-primary border-solid py-3 px-3 font-baloo font-semibold mt-2 bg-tetriary-dark text-[#5800B2] text-[16px]"
            />
          </div>
          <div className="flex flex-col  mt-4">
            <label
              htmlFor="email"
              className=" text-primary sm:text-2xl text-lg font-bold"
            >
              Email
            </label>
            <input
              type="text"
              required
              id="email"
              name="email"
              placeholder="Vaš Email"
              className="border-2 border-primary border-solid py-3 px-3 font-baloo font-semibold mt-2 bg-tetriary-dark text-[#5800B2] text-[16px]"
            />
          </div>
          <div className="flex flex-col  mt-4">
            <label
              htmlFor="broj"
              className=" text-primary sm:text-2xl text-lg font-bold"
            >
              Očekivan broj ljudi
            </label>
            <input
              type="number"
              id="broj"
              name="broj"
              min={1}
              required
              placeholder="1"
              className="border-2 border-primary border-solid py-3 px-3 font-baloo font-semibold mt-2 bg-tetriary-dark text-[#5800B2] text-[16px]"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              className="text-primary sm:text-2xl text-lg font-bold"
              htmlFor="poruka"
            >
              Upit
            </label>
            <textarea
              required
              id="poruka"
              placeholder="Napišite što Vas zanima..."
              className="border-2 border-primary border-solid py-3 px-3 font-baloo font-semibold mt-2 bg-tetriary-dark text-[#5800B2] text-[16px] h-[200px]"
            ></textarea>
          </div>
          <button className="button red flex items-center gap-4 mt-4 w-full">
            <Send />
            <span>Pošaljite poruku</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default SpecialForm;
