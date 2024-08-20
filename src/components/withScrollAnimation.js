import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const withScrollAnimation = (WrappedComponent) => {
    return (props) => {
        const [isVisible, setIsVisible] = useState(false);
        const ref = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Déconnecter l'observateur pour ne pas répéter l'animation
                    }
                },
                {
                    root: null, // Par défaut, c'est la fenêtre d'affichage
                    rootMargin: '0px', // Pas de marge ajoutée
                    threshold: 0.5, // 50% du composant doit être visible pour déclencher l'animation
                }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, []);

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }} // Invisible et décalé vers le bas
                animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animation déclenchée seulement si visible
                transition={{ duration: 0.7, ease: "easeOut" }} // Durée et type d'animation
            >
                <WrappedComponent {...props} />
            </motion.div>
        );
    };
};

export default withScrollAnimation;
