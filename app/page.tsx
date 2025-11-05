import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KategorijeRadionica from "./components/KategorijeRadionica";
import Kalendar from "./components/Kalendar";
import HowWeWork from "./components/HowWeWork";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Početna",
  description:
    "Dobrodošli u Tipsy Muse - wine & paint studio u Zagrebu. Spojite umjetnost, vino i zabavu na našim kreativnim radionicama. Rezervirajte svoje mjesto za nezaboravno iskustvo slikanja uz čašu vina.",
  keywords: [
    "wine and paint zagreb",
    "wine paint studio",
    "radionice slikanja",
    "wine & paint radionice zagreb",
    "kreativne radionice zagreb",
    "team building zagreb",
  ],
  openGraph: {
    title: "Tipsy Muse | Wine & Paint Studio Zagreb",
    description:
      "Wine & paint studio u Zagrebu gdje spajamo umjetnost, vino i zabavu. Rezervirajte radionice slikanja uz čašu vina.",
    url: "https://tipsymuse.hr",
  },
  alternates: {
    canonical: "https://tipsymuse.hr",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tipsy Muse",
    description:
      "Wine & paint studio u Zagrebu gdje spajamo umjetnost, vino i zabavu",
    url: "https://tipsymuse.hr",
    telephone: "+385 XX XXX XXXX",
    email: "tipsymusezagreb@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Maksimirska 141A",
      addressLocality: "Zagreb",
      addressCountry: "HR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.8150",
      longitude: "16.0549",
    },
    priceRange: "€€",
    image: "https://tipsymuse.hr/Logo.png",
    openingHours: "Mo-Su",
    "@id": "https://tipsymuse.hr",
    sameAs: [
      "https://www.facebook.com/tipsymuse",
      "https://www.instagram.com/tipsymuse",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <KategorijeRadionica />
        <Kalendar />
        <HowWeWork />
        <Gallery />
        <CTA />
      </main>
    </>
  );
}
