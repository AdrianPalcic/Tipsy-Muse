import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Radionice = ({ radionice }: { radionice: Radionice[] }) => {
  return (
    <section className="section-overlay-b">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 py-14 px-2 sm:px-10 ">
        {radionice.map((radionica) => {
          const {
            image,
            title,
            description,
            date,
            time,
            kapacitet,
            rezervirano,
            cijena,
            slug,
            id,
            kategorija,
          } = radionica;

          const freeSpace = kapacitet - rezervirano;
          return (
            <div className="radionica shadow-pink " key={id}>
              <div className="relative w-full h-[250px] mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover rounded-tl-md rounded-tr-md"
                />
                <span className="absolute top-6 right-6 tag">{kategorija}</span>
              </div>
              <div id="content" className="px-4 pb-4">
                <h3 className="heading-three ">{title}</h3>
                <p className="subtitle">{description.slice(0, 100)}...</p>
                <div className="flex flex-col gap-3 pb-3 border-b border-secondary/30">
                  <div className="flex gap-4 items-center font-bold text-secondary">
                    <Calendar /> <span>{date}</span>
                  </div>
                  <div className="flex gap-4 items-center font-bold text-secondary">
                    <Clock /> <span>{time}h</span>
                  </div>
                  <div className="flex gap-4 items-center font-bold text-secondary">
                    <User /> <span>{freeSpace} mjesta preostalo</span>
                  </div>
                </div>
                <div className="flex justify-between mt-4 items-center">
                  <h3 className="text-5xl">€{cijena}</h3>
                  <button className="button yellow">
                    <Link href={`/radionice/${slug}`}>Prijavi se</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Radionice;
