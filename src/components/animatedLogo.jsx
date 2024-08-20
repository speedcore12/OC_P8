import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = ({ src, alt, className }) => (
    <div className={className} style={{ position: 'relative' }}>
        <motion.img
            src={src}
            alt={alt}
            style={{ width: '100%', height: '100%', display: 'block', position: 'absolute', top: '0', left: '0' }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
        />
    </div>
);

export default AnimatedLogo;
