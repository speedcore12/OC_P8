import React from 'react';
import Typewriter from './typewriter';  // Assurez-vous que le chemin est correct

const Motivation = () => {
       
    // Styles
    const containerStyle = "w-full p-8 min-h-[265px]";
    const titleStyle = "text-3xl font-bold text-lime-500 mb-4";
    const textStyle = "text-lg text-lime-500 leading-relaxed max-w-full text-justify";

    const text = "À court terme, je souhaite poursuivre une licence professionnelle en alternance, dans le domaine du développement ou de la gestion de projet IT. À moyen terme, je vise à intégrer un Master MIAGE pour approfondir mes compétences en informatique et en gestion. À long terme, mon objectif est de devenir chef de projet ou Directeur des Systèmes d'Information (DSI). J'ai récemment terminé la formation de développeur web chez OpenClassrooms, tout en gérant une entreprise à temps plein. Passionné de programmation, j'ai également développé plusieurs jeux vidéo en C# avec Unity.";

    return (
        <div className={containerStyle}>
            <h2 className={titleStyle}>
                Passé & Avenir
            </h2>
            <div className={textStyle}>
                <Typewriter text={text} speed={10} />
            </div>
        </div>
    );
};

export default Motivation;
