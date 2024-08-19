import React from 'react';
import Typewriter from './typewriter';  // Assurez-vous que le chemin est correct

const Motivation = () => {
    const text = "À  court terme, je souhaite poursuivre une licence professionnelle en alternance, dans le domaine du développement ou de la gestion de projet IT.    À moyen terme, je vise à intégrer un Master MIAGE pour approfondir mes compétences en informatique et en gestion. À long terme, mon objectif est de devenir chef de projet ou Directeur des Systèmes d'Information (DSI). J'ai récemment terminé la formation de développeur web chez OpenClassrooms, tout en gérant une entreprise à temps plein. Passionné de programmation, j'ai également développé plusieurs jeux vidéo en C# avec Unity.";
    

    return (
        <div className="w-full p-8">
            <h2 className="text-3xl font-bold text-lime-500 mb-4">
                Passé & Avenir
            </h2>
            <div className="text-lg text-lime-500 leading-relaxed max-w-full text-justify">
                <Typewriter text={text} speed={10} />
            </div>
        </div>
    );
};

export default Motivation;
