import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = ({ src, alt, className }) => {
    // Styles
    const containerStyle = { position: 'relative' };
    const imageStyle = { 
        width: '100%', 
        height: '100%', 
        display: 'block', 
        position: 'absolute', 
        top: '0', 
        left: '0' 
    };

    return (
        <div className={className} style={containerStyle}>
            <motion.img
                src={src}
                alt={alt}
                style={imageStyle}
                whileHover={{ scale: [null, 1.5, 1.4] }}  // Animation au survol : agrandissement de l'image
                transition={{ duration: 0.3 }}  // Durée de la transition d'animation
            />
        </div>
    );
};

export default AnimatedLogo;
