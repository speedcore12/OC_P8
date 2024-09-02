import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from './typewriter';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const ProjectGrid = () => {
    // Styles 
    const containerStyle = "relative mt-10 w-full flex flex-col justify-center p-8";
    const gridStyle = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4";
    const cardStyle = "bg-backgroundDark border border-lime-300 rounded-lg overflow-hidden shadow-neon m-4 flex flex-col";
    const imgStyle = "w-full h-48 object-cover border-b-2 border-lime-300 bg-lime-200 rounded-t-lg";
    const titleStyle = "bg-lime-900 bg-opacity-7 text-lime-300 font-bold p-4 min-h-[80px]";
    const descriptionStyle = "p-4 text-lime-500 flex-1 flex flex-col"; 
    const techStyle = "mt-2";
    const linkStyle = "text-lime-300 underline mt-auto"; 
    const techContainerStyle = "flex flex-wrap gap-2 mt-2";
    const techItemStyle = "bg-lime-300 text-lime-900 px-2 py-1 rounded-lg shadow-neon";

    // Référence pour l'élément de titre pour l'animation
    const titleRef = useRef(null);
    // État pour démarrer l'animation de la machine à écrire
    const [startTyping, setStartTyping] = useState(false);

    // Utilisation du hook pour lancer l'animation lors de l'affichage du titre
    useAnimateOnScroll(titleRef, () => setStartTyping(true));

    // Données des projets avec l'ajout des descriptions alternatives pour les images
    const projetData = [
        {
            "nom": "Intégration d'une maquette responsive",
            "techno": ["HTML", "CSS", "Responsive", "GitHub"],
            "url": "https://github.com/speedcore12/OC_P2",
            "img": "/images/projets/P2.webp",
            "alt": "Aperçu du projet d'intégration d'une maquette responsive.",
            "description": "Ce projet consiste à intégrer une maquette responsive en HTML et CSS, en respectant les normes d'accessibilité et les bonnes pratiques de développement, en utilisant Visual Studio Code pour le développement, et GitHub pour la gestion de version.",
        },
        {
            "nom": "Création d'une Interface Web Dynamique",
            "techno": ["HTML", "CSS", "JS", "API RESTful", "GitHub"],
            "url": "https://github.com/speedcore12/OC_P3",
            "img": "/images/projets/P3.webp",
            "alt": "Aperçu du projet de création d'une interface web dynamique.",
            "description": "Ce projet utilise JavaScript pour gérer les interactions utilisateur et manipuler le DOM, en intégrant une API pour la communication avec le back-end, avec l'aide de Figma pour les maquettes, Visual Studio Code pour le développement, et GitHub pour la gestion de version.",
        },
        {
            "nom": "Optimisation SEO et Accessibilité : Analyse et Améliorations",
            "techno": ["HTML", "CSS", "JS", "SEO", "Accessibilité", "GitHub"],
            "url": "https://github.com/speedcore12/OC_P4",
            "img": "/images/projets/P4.webp",
            "alt": "Aperçu du projet d'optimisation SEO et accessibilité.",
            "description": "Ce projet consiste à améliorer le référencement naturel d'un site web et à garantir l'accessibilité de celui-ci, en utilisant les outils de développement et de validation et en utilisant GitHub pour la gestion de version.",
        },
        {
            "nom": "Développement d'une Application avec React et React Router",
            "techno": ["React", "React Router", "SCSS", "GitHub"],
            "url": "https://github.com/speedcore12/OC_P5",
            "img": "/images/projets/P5.webp",
            "alt": "Aperçu du projet de développement d'une application avec React et React Router.",
            "description": "Ce projet consiste à développer une application web dynamique avec React, en utilisant React Router pour la navigation en utilisant GitHub pour la gestion de version.",
        },
        {
            "nom": "Développement du Back-End avec Node.js, Express, et MongoDB",
            "techno": ["Node.js", "Express", "MongoDB", "GitHub"],
            "url": "https://github.com/speedcore12/OC_P6",
            "img": "/images/projets/P6.webp",
            "alt": "Aperçu du projet de développement du back-end avec Node.js, Express, et MongoDB.",
            "description": "Ce projet consiste à développer le back-end d'une application web dynamique avec Node.js, Express, et MongoDB, implémenterez des opérations CRUD sécurisées, en utilisant GitHub pour la gestion de version.",
        }
    ];

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
                <span className="sr-only">Mes Projets</span> {/* Texte accessible mais caché visuellement */}
                {startTyping && <Typewriter text="Mes Projets" speed={50} />}
            </motion.h2>
            <div className={gridStyle}>
                {projetData.map((projet, index) => (
                    <div key={index} className={cardStyle}>
                        <img src={projet.img} alt={projet.alt} className={imgStyle} />
                        <div className={titleStyle}>
                            <Typewriter text={projet.nom} speed={50} />
                        </div>
                        <div className={descriptionStyle}>
                            <p><Typewriter text={projet.description} speed={10} /></p>
                            <p className={techStyle}><strong>Environnements technologiques :</strong></p>
                            <div className={techContainerStyle}>
                                {projet.techno.map((tech, idx) => (
                                    <p key={idx} className={techItemStyle}>{tech}</p>
                                ))}
                            </div>
                            <a href={projet.url} target="_blank" rel="noopener noreferrer" className={linkStyle}>
                                Lien vers le GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectGrid;
