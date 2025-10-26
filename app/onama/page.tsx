import React from "react";
import Hero from "./components/Hero";
import Story from "./components/Story";
import WhyUs from "./components/WhyUs";
import Cards from "./components/Cards";

const page = () => {
  return (
    <main>
      <Hero />
      <Story />
      <WhyUs />
      <Cards />
    </main>
  );
};

export default page;
