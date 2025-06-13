import React, { useState, useEffect } from 'react';
import "../css/galerija.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Galerija = () => {

    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        // Generate random heights for masonry effect
        const imageData = Array.from({ length: 24 }, (_, i) => ({
            id: i + 1,
            src: `https://picsum.photos/400/${Math.floor(Math.random() * 200) + 200}?random=${i + 1}`,
            alt: `Gallery image ${i + 1}`,
            height: Math.floor(Math.random() * 200) + 200,
        }));
        setImages(imageData);
    }, []);

    const openFullscreen = (image) => {
        setSelectedImage(image);
        console.log("Opening image:", image);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    const closeFullScreenImage = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset'; // Restore scrolling
    }

    const navigateImage = (direction) => {
        const currentIndex = images.findIndex(img => img.id === selectedImage.id);
        let newIndex;

        if (direction === 'next') {
            newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        } else {
            newIndex = currentIndex = 0 ? images.length - 1 : currentIndex - 1;
        }

        setSelectedImage(images[newIndex]);
    }

    //Keyboard nav
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!selectedImage) return;

            if (e.key === 'Escape') {
                closeFullScreenImage();
            } else if (e.key === 'ArrowRight') {
                navigateImage('next');
            } else if (e.key === 'ArrowLeft') {
                navigateImage('prev');
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [selectedImage, images]);

    return (
        <div className="gallery-page">
            {
                !selectedImage && <ScrollToTopButton />
            }
            <Navbar />
            <div className="gallery-hero">
                <img src="/gallery-hero.png" alt="Najzabavniji art & craft u gradu " />
                <h1>Uhvaćeni trenutci</h1>
                <p>Pusti kreativnost, upoznaj ekipu, nazdravi i uživaj — sve na jednom mjestu.</p>
            </div>
            <div className="gallery-container">
                <div className="gallery-wrapper">


                    <div className="gallery-grid">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className="gallery-item"
                                style={{ height: `${image.height}px` }}
                                onClick={() => openFullscreen(image)}
                            >
                                <div className="gallery-item-inner">
                                    <img
                                        src={`https://picsum.photos/400/${image.height}?random=${image.id}`}
                                        alt={image.alt}
                                        className="gallery-image"
                                        loading='
                                        lazy'
                                    />
                                    <div className="gallery-overlay" />

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fullscreen Modal */}
                {selectedImage && (
                    <div className="gallery-modal" onClick={closeFullScreenImage}>
                        <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="gallery-close-btn" onClick={closeFullScreenImage}>
                                ×
                            </button>

                            <button
                                className="gallery-nav-btn gallery-prev-btn"
                                onClick={() => navigateImage('prev')}
                            >
                                ‹
                            </button>

                            <img
                                src={selectedImage.src || "/placeholder.svg"}
                                alt={selectedImage.alt}
                                className="gallery-modal-image"
                                loading='lazy'
                            />

                            <button
                                className="gallery-nav-btn gallery-next-btn"
                                onClick={() => navigateImage('next')}
                            >
                                ›
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="gallery-CTA">
                <img className='gallery-cta-image-left' loading='lazy' src="/item2.png" alt="Tipsy Muse Art & Craft" />
                <img className='gallery-cta-image-right' loading='lazy' src="/item1.png" alt="Tipsy Muse Art & Craft" />
                <h2>Pridruži se zabavi!</h2>
                <p>Rezerviraj svoje mjesto u sljedečoj Tipsy Muse radionici</p>
                <div className="button-container">
                    <Link to="/kalendar" className="main-button">
                        <button>Rezerviraj</button>
                    </Link>

                    <Link to="/kontakt" className="secondary-button">
                        <button>Kontakt</button>
                    </Link>
                </div>
            </div>
            <Footer />
            <div className="copyrightline">copyright © all rights reserved</div>
        </div>
    )
}

export default Galerija