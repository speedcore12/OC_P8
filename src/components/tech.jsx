import React, { useRef, useState } from 'react';
import RotatingCircleCard from './rotatingCercleCard';
import Typewriter from './typewriter';

import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { motion } from 'framer-motion';

const Tech = () => {    
    const titleRef = useRef(null);
    const [startTyping, setStartTyping] = useState(false);

    useAnimateOnScroll(titleRef, () => setStartTyping(true)); 

    const cardsData = {
        frontend: [
            ["/images/logos/react_transparent.webp", "React"],
            ["/images/logos/scss_transparent.webp", "SCSS"],
            ["/images/logos/tailwind_transparent.webp", "Tailwind CSS"]
        ],
        backend: [
            ["/images/logos/node_transparent.webp", "NodeJS"],
            ["/images/logos/express_transparent.webp", "Express"],
            ["/images/logos/mongo_transparent.webp", "MongoDB"]
        ],
        languages: [
            ["/images/logos/js_transparent.webp", "JavaScript"],
            ["/images/logos/cSharp_transparent.webp", "C#"],
            ["/images/logos/pyton_transparent.webp", "Python"]
        ]
    };   

    // Variantes pour l'animation des pointillés
    const lineVariants = {
        hidden: { width: 0 },
        visible: { 
            width: '100%',
            transition: { duration: 1, ease: 'easeInOut' }
        }
    };

    // Styles
    const containerStyle = 'p-8';
    const titleStyle = 'mb-12';
    const lineStyle = "absolute bottom-0 left-0 h-1 border-b-2 border-dashed border-lime-500";
    const gridStyle = "flex flex-row justify-between";

    return (
        <div className={containerStyle}>
            <h2 ref={titleRef} className={titleStyle}>
                {startTyping && <Typewriter text='Technologies' speed={50} />}
                <motion.div 
                    className={lineStyle}
                    variants={lineVariants}
                    initial="hidden"
                    animate={startTyping ? 'visible' : 'hidden'}
                />
            </h2>
            <div className={gridStyle}>
                {Object.entries(cardsData).map(([key, images], index) => (
                    <RotatingCircleCard key={index} images={images} text={key.charAt(0).toUpperCase() + key.slice(1)} />
                ))}
            </div>
        </div>
    );
};

export default Tech;
