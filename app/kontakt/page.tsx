import { MapPin } from "lucide-react";
import Link from "next/link";
import { info } from "../constants";
import Form from "./compontens/Form";
import CTA from "../components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte Tipsy Muse - wine & paint studio u Zagrebu. Imate pitanja o radionicama, rezervacijama ili želite organizirati privatni događaj? Javite nam se putem obrasca ili direktno na email/telefon.",
  keywords: [
    "kontakt tipsy muse",
    "rezervacija radionica zagreb",
    "wine paint studio kontakt",
    "kontaktirajte nas",
    "privatni događaji zagreb",
    "team building kontakt",
  ],
  openGraph: {
    title: "Kontakt | Tipsy Muse",
    description:
      "Kontaktirajte Tipsy Muse - wine & paint studio u Zagrebu. Rezervirajte radionicu ili organizirajte privatni događaj.",
    url: "https://tipsymuse.hr/kontakt",
  },
  alternates: {
    canonical: "https://tipsymuse.hr/kontakt",
  },
};

const page = () => {
  return (
    <>
      <section className="section-overlay-a section-padding">
        <div className="pt-40 py-20">
          <h1 className="title shadow-pink-text text-center">
            Kontaktirajte Nas
          </h1>
          <p className="subtitle text-center">
            Imate pitanja? Želite rezervirati prostor? Javite nam se!
          </p>
        </div>
        <Form />
      </section>
      <CTA />
    </>
  );
};

export default page;
