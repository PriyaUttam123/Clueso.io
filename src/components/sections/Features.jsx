import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Mic, ZoomIn, Type, FileText, Palette } from 'lucide-react';
import FeatureCard from '../common/FeatureCard';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: Wand2,
            title: 'Perfect Video Scripts',
            description: 'AI removes filler words and rewrites your script clearly and concisely, perfectly matching your brand voice.'
        },
        {
            icon: Mic,
            title: 'Lifelike AI Voiceovers',
            description: 'Your recorded audio is swapped with AI voiceovers that sound impressively professional and realistic.'
        },
        {
            icon: ZoomIn,
            title: 'Smart Auto-Zooms',
            description: 'AI automatically zooms into key actions, highlighting exactly what viewers need to see.'
        },
        {
            icon: Type,
            title: 'Beautiful Captions',
            description: 'Instantly engage your viewers with eye-catching, AI-generated captions.'
        },
        {
            icon: FileText,
            title: 'Auto-Generated SOPs & How-Tos',
            description: 'Clear, step-by-step documentation magically created from your videos.'
        },
        {
            icon: Palette,
            title: 'Branded Video Templates',
            description: 'Keep your videos consistently on brand with themed intros, outros, and backgrounds.'
        }
    ];

    return (
        <section className="features section" id="features">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">
                        Major video edits, <span className="text-gradient">automated.</span>
                    </h2>
                    <p className="section-subtitle">
                        AI does the heavy-lifting. The final touches are all yours – everything is customizable.
                    </p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
