import React, { useState, useEffect } from 'react';

const Typewriter = ({ text = "", speed = 50 }) => {
    // Styles
    const cursorStyle = "border-r-2 border-lime-500 inline-block animate-blink";

    // État pour stocker le texte affiché
    const [displayedText, setDisplayedText] = useState("");
    // État pour suivre l'index actuel dans le texte
    const [index, setIndex] = useState(0);
    // État pour indiquer si l'animation est terminée
    const [isComplete, setIsComplete] = useState(false);

    // Effet pour animer l'affichage du texte lettre par lettre
    useEffect(() => {
        if (text.length === 0 || isComplete) return;

        const interval = setInterval(() => {
            // Ajouter la lettre suivante au texte affiché
            setDisplayedText((prev) => prev + text[index]);
            setIndex((prevIndex) => prevIndex + 1);

            // Vérifier si toute la chaîne de caractères a été affichée
            if (index >= text.length - 1) {
                setIsComplete(true);
                clearInterval(interval);
            }
        }, speed);

        // Nettoyage de l'intervalle à chaque changement de dépendances
        return () => clearInterval(interval);
    }, [text, speed, index, isComplete]);

    return (
        <span>
            {displayedText}
            {/* Affiche le curseur clignotant tant que l'animation n'est pas terminée */}
            {!isComplete && <span className={cursorStyle}>|</span>}
        </span>
    );
};

export default Typewriter;
