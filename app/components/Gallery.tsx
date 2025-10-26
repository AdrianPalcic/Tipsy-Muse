import Link from "next/link";
import React from "react";

const Gallery = () => {
  const screenshots = [
    "/screenshot_0006s.jpg",
    "/screenshot_0008s.jpg",
    "/screenshot_0010s.jpg",
    "/screenshot_0012s.jpg",
    "/screenshot_0014s.jpg",
    "/screenshot_0016s.jpg",
    "/screenshot_0018s.jpg",
    "/screenshot_0020s.jpg",
    "/screenshot_0022s.jpg",
    "/screenshot_0026s.jpg",
    "/screenshot_0028s.jpg",
    "/screenshot_0030s.jpg",
    "/screenshot_0032s.jpg",
    "/screenshot_0034s.jpg",
    "/screenshot_0036s.jpg",
    "/screenshot_0038s.jpg",
    "/screenshot_0040s.jpg",
    "/screenshot_0042s.jpg",
    "/screenshot_0044s.jpg",
    "/screenshot_0046s.jpg",
    "/screenshot_0048s.jpg",
    "/screenshot_0050s.jpg",
    "/screenshot_0052s.jpg",
    "/screenshot_0054s.jpg",
  ];

  return (
    <section className="section-overlay-a section-padding">
      <div className="flex flex-col items-center">
        <h1 className="title shadow-pink-text text-center">
          Naše Šarene Večeri
        </h1>
        <p className="subtitle text-center">
          Malo vina, puno ideja. Tipsy Muse spaja kreativnost, razgovor i
          umjetnost — jer najbolje misli ne dolaze za stolom,{" "}
        </p>
        <button className="button blue">
          <Link href="/radionice">Dođi se Zabaviti!</Link>
        </button>

        <div className="mt-12 sm:mt-16 lg:mt-20 w-full overflow-hidden">
          <div className="carousel-container">
            <div className="carousel-track">
              {/* Render images 3 times for seamless infinite scroll */}
              {[...Array(3)].map((_, setIndex) =>
                screenshots.map((img, index) => (
                  <div
                    key={`img-set${setIndex}-${index}`}
                    className="carousel-item"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-pink"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
