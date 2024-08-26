import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from './typewriter';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Motivation = () => {
    const titleRef = useRef(null);
    const [startTyping, setStartTyping] = useState(false);

    // Utilisation du hook pour lancer l'animation lors de l'affichage du titre
    useAnimateOnScroll(titleRef, () => setStartTyping(true));

    // Styles
    const containerStyle = "w-full p-8 min-h-[265px]";
    const textStyle = "text-lg text-lime-500 leading-relaxed max-w-full text-justify mt-10";


    const text = "À court terme, je souhaite poursuivre une licence professionnelle en alternance, dans le domaine du développement ou de la gestion de projet IT. À moyen terme, je vise à intégrer un Master MIAGE pour approfondir mes compétences en informatique et en gestion. À long terme, mon objectif est de devenir chef de projet ou Directeur des Systèmes d'Information (DSI). J'ai récemment terminé la formation de développeur web chez OpenClassrooms, tout en gérant une entreprise à temps plein. Passionné de programmation, j'ai également développé plusieurs jeux vidéo en C# avec Unity.";

    // Animation pour le titre H2
    const titleVariants = {
        hidden: { opacity: 0, width: '0%' },
        visible: {
            opacity: 1,
            width: '100%',
            transition: { duration: 1, ease: 'easeInOut' },
        },
    };

    return (
        <div className={containerStyle}>
            <motion.h2
                ref={titleRef}
                initial="hidden"
                animate={startTyping ? 'visible' : 'hidden'}
                variants={titleVariants}
            >
                {startTyping && <Typewriter text="Passé & Avenir" speed={50} />}
            </motion.h2>
            <div className={textStyle}>
                <Typewriter text={text} speed={10} />
            </div>
        </div>
    );
};

export default Motivation;
