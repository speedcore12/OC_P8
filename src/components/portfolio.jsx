import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from './typewriter'; // Assurez-vous que le chemin est correct

const Portfolio = () => {
    const [activeLogo, setActiveLogo] = useState(null);

    // Styles regroupés
    const containerStyle = "relative mt-10 w-full flex flex-col justify-center py-8";
    const titleStyle = "text-3xl text font-bold text-lime-500 mb-0 ml-8";
    const logoContainerStyle = "relative flex justify-around items-center w-full h-96 p-10";
    const logoStyle = "w-32 h-32 cursor-pointer z-10";
    const bgStyle = "absolute bg-lime-200 w-full h-full top-0 left-0 rounded-lg ";
    const logoItemStyle = "relative w-full h-full flex items-center justify-center";
    const centeredTextStyle = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20";

    // Styles spécifiques pour les <p> éléments
    const titleTextStyle = "text-xl text-lime-950 font-bold text-center"; // Style pour le titre
    const descriptionTextStyle = "text-xl2 text-lime-950 leading-relaxed max-w-full text-justify"; // Style pour la description

    // Logos et leurs chemins
    const logos = [
        {   
            src: "/images/motion_transparent.webp", 
            alt: "Framer Motion", 
            txt: "Framer Motion ajoute des animations fluides et personnalisées aux composants React."
        },
        {   
            src: "/images/react_transparent.webp", 
            alt: "React", 
            txt: "React facilite la création de composants réutilisables et la gestion efficace des états de l'application."
        },
        {   
            src: "/images/tailwind_txt_not.webp", 
            alt: "Tailwind CSS",
            txt: "Tailwind CSS permet de créer des designs réactifs et modernes tout en centralisant le code CSS dans un seul fichier."
        },
    ];

    // Variants pour les animations
    const logoVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.5 },
        shrink: { scale: 0, opacity: 0 },
    };

    const bgVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    const handleHoverStart = (index) => {
        setActiveLogo(index);
    };

    return (
        <div className={containerStyle}>
            <p className={titleStyle}>Technologies utilisées pour ce Portfolio</p>
            <div className={logoContainerStyle}>
                {logos.map((logo, index) => (
                    <motion.div
                        key={index}
                        onHoverStart={() => handleHoverStart(index)}
                        onHoverEnd={() => setActiveLogo(null)}
                        className={logoItemStyle} // Utilisation du style pour l'élément du logo
                    >
                        <motion.img
                            src={logo.src}
                            alt={logo.alt}
                            className={logoStyle}
                            initial="initial"
                            animate={activeLogo === index ? "hover" : activeLogo === null ? "initial" : "shrink"}
                            variants={logoVariants}
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
        </div>
    );
};

export default Portfolio;
