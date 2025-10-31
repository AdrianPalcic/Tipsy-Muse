import Link from "next/link";

const OurPartners = () => {
  return (
    <section className="section-overlay-a section-padding">
      <h1 className="title shadow-pink-text text-center">Naši Partneri</h1>
      <p className="subtitle text-center max-w-5xl mx-auto">
        Ponosno surađujemo s vrhunskim vinskim kućama i festivalima koji dijele
        našu strast za umjetnošću, kreativnošću i dobrim druženjem. Naši
        partneri pomažu nam da svaka radionica bude jedinstveno iskustvo, od
        odabira kvalitetnog vina do stvaranja atmosfere koja potiče inspiraciju
        i zabavu.
      </p>
      <div className="mx-auto w-fit mb-8">
        <Link href="/partneri">
          <button className="button blue">
            Upoznajte se s našim partnerima
          </button>
        </Link>
      </div>
      <div className="flex md:flex-row flex-col gap-8 justify-center items-center">
        <div className="flex-1 w-full">
          <div className="flex flex-col gap-2">
            <div className="w-full h-[300px] sm:h-[500px]">
              <img
                src="/wine-cellar.jpg"
                alt="Wine & Art vinski partneri"
                className="w-full  h-full object-cover shadow-pink"
              />
            </div>
            <h3 className="heading-three">Naši Vinski Partneri</h3>
            <p className="subtitle">
              Suradnja s vrhunskim vinskim kućama čini svaku radionicu još
              inspirativnijom.
            </p>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="flex flex-col gap-2">
            <div className="w-full h-[300px] sm:h-[500px]">
              <img
                src="/venue.jpg"
                alt="Wine & Art vinski partneri"
                className="w-full h-full object-cover shadow-pink"
              />
            </div>
            <h3 className="heading-three">Naši Festivalski Partneri</h3>
            <p className="subtitle">
              Festivalima dijelimo kreativnu strast i dobru energiju.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
