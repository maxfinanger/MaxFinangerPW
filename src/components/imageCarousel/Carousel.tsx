import React, { useState, useEffect } from "react";
import Dalle1 from "/public/images/Dalle1.png";
import Dalle2 from "/public/images/Dalle2.png";
import Dalle3 from "/public/images/Dalle3.png";
import Dalle4 from "/public/images/Dalle4.png";
import Dalle5 from "/public/images/Dalle5.png";
import Dalle6 from "/public/images/Dalle6.png";
import Dalle7 from "/public/images/Dalle7.png";
import Dalle8 from "/public/images/Dalle8.png";
import Dalle9 from "/public/images/Dalle9.png";
import Dalle10 from "/public/images/Dalle10.png";

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        Dalle1,
        Dalle2,
        Dalle3,
        Dalle4,
        Dalle5,
        Dalle6,
        Dalle7,
        Dalle8,
        Dalle9,
        Dalle10,
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
