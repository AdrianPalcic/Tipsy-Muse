import React, { useState, useEffect, useRef } from 'react';

const galleryItems = [
    {
        id: 1,
        src: "/radionica.card.jpeg",
        title: "Tradicionalna Janjetina",
        description: "Savršeno pripremljena janjetina na žaru",
    },
    {
        id: 2,
        src: "/radionica.card.jpeg",
        title: "Odabrana Vina",
        description: "Pažljivo birane etikete lokalnih vinara",
    },
    {
        id: 3,
        src: "/radionica.card.jpeg",
        title: "Druženje i Zabava",
        description: "Nezaboravni trenuci s prijateljima",
    },
    {
        id: 4,
        src: "/radionica.card.jpeg",
        title: "Restoran Panorama",
        description: "Prekrasan ambijent s pogledom na grad",
    },
    {
        id: 5,
        src: "/radionica.card.jpeg",
        title: "Kulinarsko Iskustvo",
        description: "Spoj tradicije i moderne gastronomije",
    },
    {
        id: 6,
        src: "/radionica.card.jpeg",
        title: "Večernji Ugođaj",
        description: "Romantična atmosfera pod zvijezdama",
    },
    {
        id: 7,
        src: "/radionica.card.jpeg",
        title: "Lokalni Specijaliteti",
        description: "Okusi koji predstavljaju našu regiju",
    },
    {
        id: 8,
        src: "/radionica.card.jpeg",
        title: "Degustacijski Meni",
        description: "Više sljedova za potpuni doživljaj",
    },
];

const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const containerRef = useRef(null);

    // Calculate max slides properly
    const maxIndex = Math.max(0, galleryItems.length - cardsToShow);
    const totalSlides = maxIndex + 1;

    // Responsive cards to show
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset currentIndex when cardsToShow changes to prevent out-of-bounds
    useEffect(() => {
        const newMaxIndex = Math.max(0, galleryItems.length - cardsToShow);
        if (currentIndex > newMaxIndex) {
            setCurrentIndex(newMaxIndex);
        }
    }, [cardsToShow, currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newMaxIndex = Math.max(0, galleryItems.length - cardsToShow);
            return prevIndex >= newMaxIndex ? 0 : prevIndex + 1;
        });
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [cardsToShow]); // Add cardsToShow as dependency

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* Card Carousel */}
                <div className="carousel-section">
                    <div className="carousel-overflow">
                        {/* Cards Container */}
                        <div className="cards-container">
                            <div
                                ref={containerRef}
                                className="cards-track"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
                                }}
                            >
                                {galleryItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="card-wrapper"
                                        style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                                    >
                                        <div className="card">
                                            <div className="image-container">
                                                <img
                                                    src={item.src || "/placeholder.svg"}
                                                    alt={item.title}
                                                    className="card-image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Indicators - Only show if there are multiple slides */}
                        {totalSlides > 1 && (
                            <div className="indicators">
                                {Array.from({ length: totalSlides }).map((_, index) => (
                                    <button
                                        key={index}
                                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Gallery Stats */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-number pink">50+</div>
                        <div className="stat-label">Uspješnih Događanja</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-number cyan">1000+</div>
                        <div className="stat-label">Zadovoljnih Gostiju</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-number pink">5★</div>
                        <div className="stat-label">Prosječna Ocjena</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;