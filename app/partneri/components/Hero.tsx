import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[90vh] flex items-end pt-32 pb-12 px-4 sm:px-8 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: `url('/partneri.png')`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, 
              rgba(38, 2, 76, 0) 0%, 
              rgba(38, 2, 76, 0.3) 40%, 
              rgba(38, 2, 76, 0.7) 70%, 
              rgba(38, 2, 76, 1) 100%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="max-w-3xl text-center sm:text-left">
          <h1 className="title my-2 text-secondary shadow-blue-text">
            Naši Partneri
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-lg max-w-2xl mb-6 sm:mb-8">
            Suradnja s vrhunskim vinskim kućama i festivalima omogućuje nam da
            svaka radionica bude jedinstveno iskustvo, kreativna i inspirativna.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <Link href="#vinarije" className="w-fit">
              <button className="button blue w-full sm:w-auto">Vinarije</button>
            </Link>
            <Link href="#festivali" className="w-fit">
              <button className="button red w-full sm:w-auto">Festivali</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
