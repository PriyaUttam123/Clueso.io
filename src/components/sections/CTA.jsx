import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta section">
            <div className="cta-gradient-bg" />
            <div className="container">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="cta-title">
                        Start making beautiful videos
                    </h2>
                    <p className="cta-subtitle">
                        Join 100,000+ creators who trust Clueso to create stunning product videos
                    </p>
                    <div className="cta-buttons">
                        <Button size="lg">
                            Get Started Free
                            <ArrowRight size={18} />
                        </Button>
                        <Button variant="secondary" size="lg">
                            Book a Demo
                        </Button>
                    </div>
                    <p className="cta-note">No credit card required • Free 14-day trial</p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
