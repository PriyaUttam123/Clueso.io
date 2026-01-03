import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, Edit, Share2 } from 'lucide-react';
import StepCard from '../common/StepCard';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Record or Upload',
            description: 'Record a new video with Clueso or upload an existing screen recording or slide deck.'
        },
        {
            number: '02',
            title: 'Clueso does the magic',
            description: "Clueso's AI improves your script, adds a natural-sounding AI voiceover, and enhances visuals."
        },
        {
            number: '03',
            title: 'Customize to Your Liking',
            description: 'Every video made by Clueso AI is fully customizable. Edit the voice, flow, or visuals directly from the video editor.'
        },
        {
            number: '04',
            title: 'Export & Share',
            description: 'Download, embed, or share your creation as a link instantly.'
        }
    ];

    return (
        <section className="how-it-works section" id="how-it-works">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">
                        Stunning content in <span className="text-gradient">just four steps</span>
                    </h2>
                </motion.div>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <StepCard
                            key={index}
                            stepNumber={step.number}
                            title={step.title}
                            description={step.description}
                            delay={index * 0.15}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
