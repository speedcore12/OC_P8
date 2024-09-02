import React, { useState, useEffect } from 'react';

const Intro = () => {
    // Styles
    const introStyle = "w-full h-4/6 flex flex-col justify-center items-end p-8 bg-left bg-no-repeat bg-cover";
    const containerStyle = "w-full text-right";
    const titleStyle = "text-4xl font-bold text-lime-500";
    const animatedTextContainerStyle = "text-4xl font-bold text-lime-500 h-12 flex justify-end items-center";
    const animatedTextStyle = "inline-block bg-lime-300 text-backgroundDark px-2 py-1 m-1";
    const subtitleStyle = "text-2xl font-light text-lime-300 mt-4";

    // Liste des titres à afficher de manière animée
    const titles = ["React ", "Tailwind CSS ", "Node.js ", "Express ", "MongoDB "];
    // État pour gérer le texte actuellement affiché
    const [currentTitle, setCurrentTitle] = useState("");
    // État pour gérer l'index du titre en cours
    const [index, setIndex] = useState(0);
    // État pour gérer le texte affiché lettre par lettre
    const [displayedText, setDisplayedText] = useState("");
    // État pour déterminer si le texte est en cours de suppression
    const [isDeleting, setIsDeleting] = useState(false);

    // Utilisation du hook useEffect pour animer l'apparition et la suppression du texte
    useEffect(() => {
        const handleType = () => {
            const fullText = titles[index];
            if (isDeleting) {
                // Supprime une lettre du texte affiché
                setDisplayedText(fullText.substring(0, displayedText.length - 1));
                if (displayedText.length === 0) {
                    // Si le texte est complètement supprimé, passe au titre suivant
                    setIsDeleting(false);
                    setIndex((prevIndex) => (prevIndex + 1) % titles.length);
                }
            } else {
                // Ajoute une lettre au texte affiché
                setDisplayedText(fullText.substring(0, displayedText.length + 1));
                if (displayedText === fullText) {
                    // Pause avant de commencer la suppression du texte
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            }
        };

        // Détermine la vitesse d'animation (plus rapide pour la suppression)
        const typingSpeed = isDeleting ? 50 : 200;
        // Démarre le timer pour l'animation
        const timer = setTimeout(handleType, typingSpeed);

        // Nettoie le timer lorsqu'un nouvel effet est appliqué
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, index, titles]);

    return (
        <div 
            className={introStyle} 
            style={{ 
                // Définition de l'image de fond et du dégradé
                backgroundImage: 'linear-gradient(to left, rgba(26, 46, 5, 1), rgba(26, 46, 5, 0)), url(images/lime_tinted.webp)',
                height: '50vh'
            }}
        >
            <div className={containerStyle}>
                {/* Titre fixe "Développeur fullstack :" */}
                <div className={titleStyle}>
                    <h1>Développeur fullstack</h1>
                </div>
                {/* Conteneur pour le texte animé */}
                <div className={animatedTextContainerStyle}>
                    {/* Affiche toutes les lettres sauf la dernière */}
                    <span>
                        {displayedText.slice(0, -1)}
                    </span>
                    {/* Entoure la dernière lettre d'un carré coloré */}
                    <span className={animatedTextStyle}>
                        {displayedText.slice(-1)}
                    </span>
                </div>
                {/* Sous-titre statique */}
                <div className={subtitleStyle}>
                    Créatif, passionné et autodidacte
                </div>
                {/* Lien de téléchargement du CV */}
                <div className='mt-2'>
                    <a className={subtitleStyle} href='/files/cv.pdf' target="_blank" download="cv.pdf">Télécharger mon CV</a>
                </div>

            </div>
        </div>
    );
};

export default Intro;
