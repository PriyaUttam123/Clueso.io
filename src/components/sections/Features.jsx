import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
    const features = [
        {
            title: 'Perfect Video Scripts',
            description: 'AI removes filler words and rewrites your script clearly and concisely, perfectly matching your brand voice.',
            visual: 'text'
        },
        {
            title: 'Lifelike AI Voiceovers',
            description: 'Your recorded audio is swapped with AI voiceovers that sound impressively professional and realistic.',
            visual: 'waveform'
        }
    ];

    // Generate waveform bars
    const waveformBars = Array.from({ length: 60 }, (_, i) => {
        const position = i / 60;
        const height = Math.sin(position * Math.PI * 4) * 40 + Math.random() * 20;
        const isActive = position > 0.3 && position < 0.7;
        return {
            height: height + 30,
            isActive,
            delay: i * 0.01
        };
    });

    return (
        <section className="features-major section" id="features">
            <div className="features-major-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="features-major-title">
                        Major video edits, automated.
                    </h2>
                    <p className="features-major-subtitle">
                        AI does the heavy-lifting. The final touches are all yours – everything is customizable.
                    </p>
                </motion.div>

                <div className="features-major-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-major-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {feature.visual === 'text' ? (
                                <div className="feature-text-visual">
                                    <div className="text-line"></div>
                                    <div className="text-line short"></div>
                                    <div className="text-line"></div>
                                    <div className="text-line medium"></div>
                                </div>
                            ) : (
                                <div className="feature-waveform-visual">
                                    <div className="waveform-container">
                                        {waveformBars.map((bar, i) => (
                                            <motion.div
                                                key={i}
                                                className={`waveform-bar ${bar.isActive ? 'active' : ''}`}
                                                style={{ height: `${bar.height}%` }}
                                                initial={{ scaleY: 0 }}
                                                whileInView={{ scaleY: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: bar.delay,
                                                    ease: "easeOut"
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="feature-major-content">
                                <h3 className="feature-major-title">{feature.title}</h3>
                                <p className="feature-major-description">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

