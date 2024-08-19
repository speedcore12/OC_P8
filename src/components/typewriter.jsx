import React, { useState, useEffect } from 'react';

const Typewriter = ({ text = "", speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (text.length === 0 || isComplete) return;

        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            setIndex((prevIndex) => prevIndex + 1);

            if (index >= text.length - 1) {
                setIsComplete(true);
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, index, isComplete]);

    return (
        <span>
            {displayedText}
            {!isComplete && <span className="border-r-2 border-lime-500 inline-block animate-blink">|</span>}
        </span>
    );
};

export default Typewriter;
