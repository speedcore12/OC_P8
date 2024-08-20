import React from 'react';
import RotatingCircleCard from './rotatingCercleCard';
import withScrollAnimation from './withScrollAnimation';

const Tech = () => {    
    // Styles
    const titleStyle = "text-3xl font-bold text-lime-500 m-8";

    const cardsData = {
        frontend: [
            ["/images/react_transparent.webp", "React"],
            ["/images/scss_transparent.webp", "SCSS"],
            ["/images/tailwind_transparent.webp", "Tailwind CSS"]
        ],
        backend: [
            ["/images/node_transparent.webp", "NodeJS"],
            ["/images/express_transparent.webp", "Express"],
            ["/images/mongo_transparent.webp", "MongoDB"]
        ],
        languages: [
            ["/images/js_transparent.webp", "JavaScript"],
            ["/images/cSharp_transparent.webp", "C#"],
            ["/images/pyton_transparent.webp", "Python"]
        ]
    };   

    return (
        <div>
            <p className={titleStyle}>Technologies</p>
            <div className="flex flex-row justify-between">
                {Object.entries(cardsData).map(([key, images], index) => (
                    <RotatingCircleCard key={index} images={images} text={key.charAt(0).toUpperCase() + key.slice(1)} />
                ))}
            </div>
        </div>
    );
    
};

export default withScrollAnimation(Tech);