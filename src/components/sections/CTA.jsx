import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
    const playIcons = [
        { color: '#FF4D6D', delay: 0, x: -350, y: -120 },
        { color: '#FF8E3C', delay: 0.2, x: -380, y: 80 },
        { color: '#FFD93D', delay: 0.4, x: -250, y: -180 },
        { color: '#6BCF7F', delay: 0.6, x: 280, y: 120 },
        { color: '#4D9DE0', delay: 0.8, x: 350, y: -140 },
        { color: '#9D4EDD', delay: 1.0, x: 400, y: 50 },
        { color: '#5C2D91', delay: 0.5, x: 0, y: -220 }, // New icon for top center
        { color: '#00E676', delay: 0.7, x: 0, y: 200 }   // New icon for bottom center
    ];

    return (
        <section className="cta-experience section">
            <div className="cta-experience-container">
                <div className="play-icons-container">
                    {playIcons.map((icon, index) => (
                        <motion.div
                            key={index}
                            className="play-icon-3d"
                            style={{
                                backgroundColor: icon.color,
                                left: `calc(50% + ${icon.x}px)`,
                                top: `calc(50% + ${icon.y}px)`
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: icon.delay,
                                type: "spring",
                                stiffness: 100
                            }}
                        >
                            <div className="play-triangle"></div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="cta-experience-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2 className="cta-experience-title">
                        Experience it yourself
                    </h2>
                    <button className="cta-experience-button">
                        Make Your First Video
                    </button>
                </motion.div>

                <div className="cta-translate-label">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1L11 6L6 11L1 6L6 1Z" fill="#E91E63" />
                    </svg>
                    <span>TRANSLATE</span>
                </div>
            </div>
        </section>
    );
};

export default CTA;
