import React from "react";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Cards from "./components/Cards";
import OurPartners from "./components/OurPartners";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Upoznajte Tipsy Muse - wine & paint studio u Zagrebu. Naša priča o spajanju umjetnosti, vina i zabave. Otkrijte zašto smo stvorili prostor gdje svatko može biti kreativan uz čašu vina.",
  keywords: [
    "o nama tipsy muse",
    "priča tipsy muse",
    "wine paint studio zagreb",
    "kreativni prostor zagreb",
    "umjetnički studio zagreb",
  ],
  openGraph: {
    title: "O nama | Tipsy Muse",
    description:
      "Upoznajte Tipsy Muse - wine & paint studio u Zagrebu gdje spajamo umjetnost, vino i zabavu.",
    url: "https://tipsymuse.hr/onama",
  },
  alternates: {
    canonical: "https://tipsymuse.hr/onama",
  },
};

const page = () => {
  return (
    <main>
      <Hero />
      <Story />
      <OurPartners />
      <Cards />
    </main>
  );
};

export default page;
