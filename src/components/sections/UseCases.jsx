import React from 'react';
import { motion } from 'framer-motion';
import './UseCases.css';

const UseCases = () => {
    const useCases = [
        'Customer Education',
        'Product Marketing',
        'Learning & Development',
        'Sales Enablement',
        'Product Management',
        'IT Change Management',
        'Customer Success/Support',
        'Engineering'
    ];

    return (
        <section className="use-cases section" id="use-cases">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">
                        <span className="text-gradient">Clueso is Built For You</span>
                    </h2>
                    <p className="section-subtitle">
                        Explaining software is hard. Clueso makes it easy.
                    </p>
                </motion.div>

                <div className="use-cases-grid">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            className="use-case-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {useCase}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
