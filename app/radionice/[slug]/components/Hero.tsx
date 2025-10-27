import React from "react";

const Hero = ({
  image,
  kategorija,
  title,
  description,
}: {
  image: string;
  kategorija: string;
  title: string;
  description: string;
}) => {
  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[90vh] flex items-end pt-32 pb-12 px-4 sm:px-8 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: `url('${image}')`,
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

      <div className="relative z-10 max-w-7xl w-full">
        <div className="max-w-3xl">
          <span className="tag ">{kategorija}</span>
          <h1 className="title my-2 text-secondary shadow-blue-text">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-lg max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
