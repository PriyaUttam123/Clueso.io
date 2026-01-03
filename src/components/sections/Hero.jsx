import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Play, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import Comparison from './Comparison';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    return (
        <section className="hero">
            <div className="hero-bg-glow" />

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-badge"
                >
                    <span className="new-tag">New</span>
                    <span>Clueso 2.0 is now live on Product Hunt!</span>
                    <ArrowRight size={14} />
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Turn Screen Recordings into <br />
                    <span className="text-gradient">Polished Product Videos</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Create professional docs and beautiful videos in seconds with AI.
                    No heavy editing skills required. Just record and let Clueso do the magic.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button size="lg" onClick={() => navigate(user ? '/dashboard' : '/signup')}>
                        {user ? 'Go to Dashboard' : 'Get Started Free'}
                        <ArrowRight size={18} />
                    </Button>
                    <Button variant="secondary" size="lg" onClick={() => navigate('/demo')}>
                        <Play size={18} fill="currentColor" />
                        Watch Demo
                    </Button>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    style={{ width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'center' }}
                >
                    <Comparison />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
