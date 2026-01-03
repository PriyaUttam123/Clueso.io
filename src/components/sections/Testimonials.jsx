import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials-product section" id="testimonials">
            <div className="testimonials-product-container">
                <motion.div
                    className="testimonial-main"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="testimonial-quote">
                        Clueso has empowered our Product team to produce high-quality videos & training content{' '}
                        <span className="highlight-faster">20x faster</span>
                    </h2>

                    <div className="testimonial-author">
                        <div className="author-avatar">
                            <img
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%234A90E2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='white'%3ESO%3C/text%3E%3C/svg%3E"
                                alt="Sean O'Donnell"
                            />
                            <div className="company-badge">
                                <span className="company-initial">P</span>
                            </div>
                        </div>
                        <div className="author-info">
                            <div className="author-name">Sean O'Donnell</div>
                            <div className="author-title">Director of Product Management, Phenom</div>
                        </div>
                    </div>
                </motion.div>

                <div className="crafted-label">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1L11 6L6 11L1 6L6 1Z" fill="#E91E63" />
                    </svg>
                    <span>CRAFTED WITH AI</span>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

