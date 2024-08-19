import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 300, pause = 1500, animatedTextStyle = "") => {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timer;
        if (displayedText.length < text.length) {
            // Ajoute une lettre au texte affiché
            timer = setTimeout(() => {
                setDisplayedText(text.substring(0, displayedText.length + 1));
            }, speed);
        } else {
            // Lorsque tout le texte est affiché, marquer comme complet
            setTimeout(() => {
                setIsComplete(true);
            }, pause);
        }

        return () => clearTimeout(timer);
    }, [displayedText, text, speed, pause]);

    const renderedText = (
        <>
            <span>
                {displayedText.slice(0, -1)}
            </span>
            {isComplete ? (
                <span>{displayedText.slice(-1)}</span> // Dernière lettre sans carré une fois complet
            ) : (
                <span className={animatedTextStyle}>
                    {displayedText.slice(-1)}
                </span>
            )}
        </>
    );

    return { renderedText, isComplete };
};

export default useTypewriter;
