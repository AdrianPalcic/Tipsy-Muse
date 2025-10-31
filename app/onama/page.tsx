import React from "react";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Cards from "./components/Cards";
import OurPartners from "./components/OurPartners";

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
