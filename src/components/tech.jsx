import React, { useRef, useState } from 'react';
import RotatingCircleCard from './rotatingCercleCard';
import Typewriter from './typewriter';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { motion } from 'framer-motion';

const Tech = () => {    
    // Référence pour l'animation du titre
    const titleRef = useRef(null);
    // État pour démarrer l'animation de la machine à écrire
    const [startTyping, setStartTyping] = useState(false);

    // Utilisation du hook pour lancer l'animation lors de l'affichage du titre
    useAnimateOnScroll(titleRef, () => setStartTyping(true)); 

    // Styles
    const containerStyle = 'p-2';
    const titleStyle = 'mb-12';
    const lineStyle = "absolute bottom-0 left-0 h-1 border-b-2 border-dashed border-lime-500";
    const gridStyle = "gap-6 flex flex-col md:flex-row justify-between"; 

    // Données des cartes pour chaque catégorie (Frontend, Backend, Langages)
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

    // Variantes pour l'animation de la ligne en pointillés sous le titre
    const lineVariants = {
        hidden: { width: 0 },
        visible: { 
            width: '100%',
            transition: { duration: 1, ease: 'easeInOut' }
        }
    };

    return (
        <div className={containerStyle}>
            <h2 ref={titleRef} className={titleStyle}>
                {/* Titre animé avec la machine à écrire */}
                {startTyping && <Typewriter text='Technologies maîtrisées' speed={50} />}
                <motion.div 
                    className={lineStyle}
                    variants={lineVariants}
                    initial="hidden"
                    animate={startTyping ? 'visible' : 'hidden'}
                />
            </h2>
            <div className={gridStyle}>
                {/* Boucle sur les catégories de technologies */}
                {Object.entries(cardsData).map(([key, images], index) => (
                    <RotatingCircleCard 
                        key={index} 
                        images={images} 
                        text={key.charAt(0).toUpperCase() + key.slice(1)} // Capitalise le premier caractère du nom de la catégorie
                    />
                ))}
            </div>
        </div>
    );
};

export default Tech;
