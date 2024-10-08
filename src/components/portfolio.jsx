import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from './typewriter';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Portfolio = () => {
    // Styles
    const containerStyle = "relative mt-10 w-full flex flex-col justify-center p-4 lg:p-8";
    const logoContainerStyle = "relative flex flex-wrap justify-around items-center h-auto p-4 lg:p-10";
    const logoStyle = "w-32 h-32 cursor-pointer z-10";
    const bgStyle = "absolute bg-lime-200 w-full h-full top-0 left-0 rounded-lg shadow-neon";
    const logoItemStyle = "relative flex items-center justify-center w-full max-w-[350px] h-80 flex-shrink-0 lg:w-[350px] lg:h-96";
    const centeredTextStyle = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-lime-200 bg-opacity-50 h-full w-full rounded-lg p-4 lg:p-16 lg:pl-20 lg:pr-20";
    const titleTextStyle = "text-xl text-lime-950 font-bold text-center"; 
    const descriptionTextStyle = "text-xl2 text-lime-950 leading-relaxed max-w-full text-justify";
    const linkStyle = "text-lime-300 underline mt-auto text-center";
    
        // Référence pour l'élément de titre pour l'animation
    const titleRef = useRef(null);
    // État pour démarrer l'animation de la machine à écrire
    const [startTyping, setStartTyping] = useState(false);

    // Utilisation du hook pour lancer l'animation lors de l'affichage du titre
    useAnimateOnScroll(titleRef, () => setStartTyping(true));

    // État pour gérer le logo actif (celui survolé ou cliqué)
    const [activeLogo, setActiveLogo] = useState(null);

    // Logos et leurs descriptions
    const logos = [
        {   
            src: "/images/logos/motion_transparent.webp", 
            alt: "Framer Motion", 
            txt: "Framer Motion ajoute des animations fluides et personnalisées aux composants React."
        },
        {   
            src: "/images/logos/react_transparent.webp", 
            alt: "React", 
            txt: "React facilite la création de composants réutilisables et la gestion efficace des états de l'application."
        },
        {   
            src: "/images/logos/tailwind_txt_not.webp", 
            alt: "Tailwind CSS",
            txt: "Tailwind CSS permet de créer des designs réactifs et modernes tout en centralisant le code CSS dans un seul fichier."
        },
    ];

    // Variants pour les animations des logos
    const logoVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1 },  // Légère augmentation de la taille au survol
        shrink: { scale: 0.9, opacity: 0.5 },  // Réduction de la taille et opacité pour les autres logos
    };

    // Variants pour l'animation de fond lors du survol d'un logo
    const bgVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    // Animation pour le titre H2
    const titleVariants = {
        hidden: { opacity: 0, width: '0%' },
        visible: {
            opacity: 1,
            width: '100%',
            transition: { duration: 1, ease: 'easeInOut' },
        },
    };

    // Gestion des clics sur les logos
    const handleLogoClick = (index) => {
        if (activeLogo === index) {
            setActiveLogo(null); // Désactive le logo si cliqué à nouveau
        } else {
            setActiveLogo(index); // Active le logo cliqué
        }
    };

    // Gestion des clics à l'extérieur des logos pour désactiver les animations
    const handleClickOutside = (event) => {
        if (!event.target.closest('.logo-container') && activeLogo !== null) {
            setActiveLogo(null); // Réinitialise l'état `activeLogo` pour désactiver tous les logos
        }
    };

    // Effet pour ajouter l'écouteur d'événements pour les clics extérieurs
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        // Nettoyage de l'écouteur d'événements pour éviter les fuites de mémoire
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [activeLogo]);

    return (
        <div className={containerStyle}>
            <motion.h2
                ref={titleRef}
                initial="hidden"
                animate={startTyping ? 'visible' : 'hidden'}
                variants={titleVariants}
            >
                {/* Texte par défaut visible avant l'animation */}
                {!startTyping && 'Technologies utilisées pour ce Portfolio'}
                
                {/* Titre animé avec la machine à écrire */}
                {startTyping && <Typewriter text="Technologies utilisées pour ce Portfolio" speed={50} />}
            </motion.h2>

            <div className={`${logoContainerStyle} logo-container`}>
                {logos.map((logo, index) => (
                    <motion.div
                        key={index}
                        onHoverStart={() => setActiveLogo(index)}
                        onHoverEnd={() => setActiveLogo(null)}
                        onClick={() => handleLogoClick(index)}  // Gère les écrans tactiles
                        className={logoItemStyle}
                        initial="initial"
                        animate={activeLogo === index ? "hover" : activeLogo === null ? "initial" : "shrink"}
                        variants={logoVariants}
                    >
                        <motion.img
                            src={logo.src}
                            alt={logo.alt}
                            className={logoStyle}
                        />
                        {activeLogo === index && (
                            <>
                                <motion.div
                                    className={bgStyle}
                                    initial="hidden"
                                    animate="visible"
                                    variants={bgVariants}
                                />
                                <motion.div
                                    className={centeredTextStyle}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { delay: 0.5 } }}
                                >
                                    <p className={titleTextStyle}>
                                        <Typewriter text={logo.alt} speed={100} />
                                    </p>
                                    <p className={descriptionTextStyle}>
                                        <Typewriter text={logo.txt} speed={25} />
                                    </p>
                                </motion.div>
                            </>
                        )}
                    </motion.div>
                ))}
            </div>
            <a href="https://github.com/speedcore12/OC_P8" target="_blank" rel="noopener noreferrer" className={linkStyle}>
                Lien vers le GitHub
            </a>
        </div>
    );
};

export default Portfolio;
