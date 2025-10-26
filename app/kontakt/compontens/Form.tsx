"use client";

import { info } from "@/app/constants";
import Link from "next/link";
import React from "react";

const Form = () => {
  return (
    <div className="flex gap-6 lg:flex-row flex-col ">
      <div className=" bg-tetriary px-5 py-5 lg:px-12 lg:py-10 shadow-yellow border-3 border-secondary border-solid flex-1">
        <h3 className="heading-three mb-4">Pošaljite Poruku</h3>
        <form action="POST">
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex flex-col">
              <label
                className="text-secondary sm:text-2xl text-lg font-bold"
                htmlFor="ime"
              >
                Ime i Prezime
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Vaše Ime i Prezime"
                className="border-2 border-secondary border-solid py-3 px-3 font-baloo font-semibold mt-2 bg-tetriary-dark text-[#5800B2] text-[16px]"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-secondary sm:text-2xl text-lg font-bold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email@example.com"
                className="border-2 border-secondary border-solid py-3 px-3 font-baloo font-semibold mt-2 bg-tetriary-dark text-[#5800B2] text-[16px]"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-secondary sm:text-2xl text-lg font-bold"
                htmlFor="telefon"
              >
                Telefon
              </label>
              <input
                type="text"
                id="telefon"
                name="telefon"
                placeholder="+385 XX XXX XXXX"
                className="border-2 border-secondary border-solid py-3 px-3 font-baloo font-semibold mt-2 bg-tetriary-dark text-[#5800B2] text-[16px]"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-secondary sm:text-2xl text-lg font-bold"
                htmlFor="poruka"
              >
                Poruka
              </label>
              <textarea
                id="poruka"
                placeholder="Vaša Poruka"
                className="border-2 border-secondary border-solid py-3 px-3 font-baloo font-semibold mt-2 bg-tetriary-dark text-[#5800B2] text-[16px] h-[200px]"
              ></textarea>
            </div>
          </div>
        </form>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="bg-tetriary border-2 border-fifth shadow-pink px-5 py-5 lg:px-12 lg:py-10">
          <h3 className="heading-three text-fifth mb-12">Informacije</h3>
          <div className="flex flex-col gap-12">
            {info.map((i) => (
              <div key={i.value} className="flex gap-4 text-secondary">
                {i.icon}
                <Link href="/">
                  <p className="font-luckiest-guy">{i.label}</p>
                  <span>{i.value}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-tetriary border-2 border-fourth shadow-green p-5 md:p-6 flex justify-center items-center h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.487692737345!2d16.022090576012108!3d45.82151760952732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7c410af8343%3A0x66026b1368cef3ce!2sMaksimirska%20Cesta%20141%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1761512257873!5m2!1shr!2shr"
            width="600"
            className="h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Form;
