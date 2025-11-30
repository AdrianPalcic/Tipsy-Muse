import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const Radionice = ({ radionice }: { radionice: Radionice[] }) => {
  return (
    <section className="section-overlay-b">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 py-14 px-2 sm:px-10 ">
        {radionice.map((radionica) => {
          const {
            image,
            naslov,
            opis,
            datum,
            vrijeme,
            kapacitet,
            rezervirano,
            cijena,
            slug,
            _id,
            kategorija,
          } = radionica;

          const freeSpace = kapacitet - rezervirano;
          return (
            <div className="radionica shadow-pink " key={_id}>
              <div className="relative w-full h-[250px] mb-4">
                <img
                  src={image?.asset.url}
                  alt={naslov}
                  className="w-full h-full object-cover rounded-tl-md rounded-tr-md"
                />
                <span className="absolute top-6 right-6 tag">{kategorija}</span>
              </div>
              <div id="content" className="px-4 pb-4">
                <h3 className="heading-three ">{naslov}</h3>
                <p className="subtitle">{opis.slice(0, 100)}...</p>
                <div className="flex flex-col gap-3 pb-3 border-b border-secondary/30">
                  <div className="flex gap-4 items-center font-bold text-secondary">
                    <Calendar /> <span>{datum}</span>
                  </div>
                  <div className="flex gap-4 items-center font-bold text-secondary">
                    <Clock /> <span>{vrijeme}h</span>
                  </div>
                  <div className="flex gap-4 items-center font-bold text-secondary">
                    <User /> <span>{freeSpace} mjesta preostalo</span>
                  </div>
                </div>
                <div className="flex justify-between mt-4 items-center">
                  {freeSpace >= 1 ? (
                    <>
                      <h3 className="text-5xl">€{cijena}</h3>
                      <Link
                        href={`/radionice/${slug.current}`}
                        className="w-fit"
                      >
                        <button className="button yellow">Prijavi se</button>
                      </Link>
                    </>
                  ) : (
                    <div className="bg-red-900/60 border-3 border-red-600 w-fit py-3 px-6 my-4 flex items-center justify-center font-luckiest-guy text-red-600 text-[16px]">
                      {" "}
                      Nažalost ova radionica je bookirana
                    </div>
                  )}
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
