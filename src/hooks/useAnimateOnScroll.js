import { useEffect } from 'react';

export const useAnimateOnScroll = (ref, onVisible, animationClass = 'animate-expand-line') => {
    useEffect(() => {
        // Crée un nouvel observer pour surveiller l'intersection des éléments
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Si l'élément est visible, exécute la fonction callback `onVisible`
                        if (onVisible) onVisible(entry.target);

                        // Ajoute la classe d'animation si définie
                        if (animationClass) {
                            entry.target.classList.add(animationClass);
                        }

                        // Arrête l'observation de cet élément après l'animation
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 } // Seuil d'intersection (10% de visibilité)
        );

        // Commence à observer l'élément référencé
        if (ref.current) {
            observer.observe(ref.current);
        }

        // Nettoie l'observation lorsque le composant est démonté ou que les dépendances changent
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, onVisible, animationClass]);
};
