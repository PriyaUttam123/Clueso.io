import React from 'react';
import { motion } from 'framer-motion';
import './StepCard.css';

const StepCard = ({ stepNumber, title, description, delay = 0 }) => {
    return (
        <motion.div
            className="step-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            <div className="step-number">{stepNumber}</div>
            <h3 className="step-title">{title}</h3>
            <p className="step-description">{description}</p>
        </motion.div>
    );
};

export default StepCard;
