import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';
import image1 from '../../assets/gallery/gallery1.jpeg';
import image2 from '../../assets/gallery/gallery2.jpeg';
import image3 from '../../assets/gallery/gallery3.jpeg';
import image4 from '../../assets/gallery/gallery4.jpeg';
import image5 from '../../assets/gallery/gallery5.jpeg';
import image6 from '../../assets/gallery/gallery6.jpeg';
import image7 from '../../assets/gallery/gallery7.jpeg';

const images = [image1, image2, image3, image4, image5, image6, image7];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const galleryRef = useRef(null);
    const autoScrollInterval = useRef(null);

    useEffect(() => {
        autoScrollInterval.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(autoScrollInterval.current);
    }, []);

    useEffect(() => {
        if (galleryRef.current) {
            galleryRef.current.scrollTo({
                left: currentIndex * galleryRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    }, [currentIndex]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
        clearInterval(autoScrollInterval.current);
        autoScrollInterval.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    };

    // Calculate indices for 2 dots
    const dotIndices = [0, Math.floor(images.length / 2)];

    return (
        <div id='Gallery'>
            <div className="gallery-section" style={{ paddingTop: '100px' }}>
                <div className="container">
                    <h2 className="text-center mb-4">OUR GALLERY</h2>
                    <div className="gallery-scrollable" ref={galleryRef}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
                        ))}
                    </div>
                    <div className="text-center mt-3">
                        {dotIndices.map((index) => (
                            <span
                                key={index}
                                className={`dot ${currentIndex >= index && currentIndex < index + Math.ceil(images.length/2) ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;