import React from 'react';
import { motion } from 'framer-motion';

const withScrollAnimation = (WrappedComponent) => {
    return (props) => (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <WrappedComponent {...props} />
        </motion.div>
    );
};

export default withScrollAnimation;
