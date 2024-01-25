import React, { useState, useEffect } from "react";

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "./images/Dalle1.png",
        "./images/Dalle2.png",
        "./images/Dalle3.png",
        "./images/Dalle4.png",
        "./images/Dalle5.png",
        "./images/Dalle6.png",
        "./images/Dalle7.png",
        "./images/Dalle8.png",
        "./images/Dalle9.png",
        "./images/Dalle10.png",
    ];

    useEffect(() => {
        console.log("Current index:", currentIndex);
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    /* return (
        <div>
            <div className="carousel">
                <img
                    src={images[currentIndex]}
                    alt={`Carousel Image ${currentIndex + 1}`}
                />
            </div>
        </div>
    );
    */
    return (
        <div className="carousel">
            <img src="/images/Dalle1.png" alt="Test Image" />
        </div>
    );
};

export { Carousel };
