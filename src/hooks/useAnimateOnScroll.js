import { useEffect } from 'react';

export const useAnimateOnScroll = (ref, onVisible, animationClass = 'animate-expand-line') => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (onVisible) onVisible(entry.target);  // Exécute le callback lorsque visible
                        
                        // Ajoute la classe d'animation à l'élément
                        if (animationClass) {
                            entry.target.classList.add(animationClass);
                        }

                        observer.unobserve(entry.target); // Arrête l'observation après l'animation
                    }
                });
            },
            { threshold: 0.1 } // Seuil d'intersection
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, onVisible, animationClass]);
};
