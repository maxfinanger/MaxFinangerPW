import React, { useState, useEffect } from "react";
import Dalle1 from "./images/Dalle1.png";
import Dalle2 from "./images/Dalle2.png";
// ... import other images

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        Dalle1,
        Dalle2,
        // ... other images
    ];

    useEffect(() => {
        console.log("Current index:", currentIndex);
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [currentIndex, images.length]);

    return (
        <div className="carousel">
            <img
                src={images[currentIndex]}
                alt={`Carousel Image ${currentIndex + 1}`}
            />
        </div>
    );
};

export { Carousel };
