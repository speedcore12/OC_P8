import React from 'react';
import RotatingCircleCard from './rotatingCercleCard';
import withScrollAnimation from './withScrollAnimation';

const Tech = () => {

    //const elementsRef = useScrollAnimation();

    const card1 = [
        ["/images/react_transparent.webp", "React"],
        ["/images/scss_transparent.webp", "SCSS"],
        ["/images/tailwind_transparent.webp", "Tailwind CSS"] 
    ]

    const card2 = [
        ["/images/node_transparent.webp", "NodeJS"],
        ["/images/express_transparent.webp", "Express"],
        ["/images/mongo_transparent.webp", "MongoDB"]
    ]

    const card3 = [
        ["/images/js_transparent.webp", "React"],
        ["/images/cSharp_transparent.webp", "SCSS"],
        ["/images/pyton_transparent.webp", "Tailwind CSS"]
    ]


    return (
        <div>
            <p className="text-3xl font-bold text-lime-500 m-8" >Technologies</p>
            <div className="flex flex-row justify-between">
            <RotatingCircleCard images={card1} text="Frontend" />
            <RotatingCircleCard images={card2} text="Backend" />
            <RotatingCircleCard images={card3} text="Langages" />


            </div>

        </div>
    );
};

export default withScrollAnimation(Tech);