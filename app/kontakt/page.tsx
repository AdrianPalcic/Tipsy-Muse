import { MapPin } from "lucide-react";
import Link from "next/link";
import { info } from "../constants";
import Form from "./compontens/Form";
import CTA from "../components/CTA";

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
