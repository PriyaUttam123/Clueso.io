import React from 'react';
import { motion } from 'framer-motion';
import Accordion from '../common/Accordion';
import './FAQ.css';

const FAQ = () => {
    const faqs = [
        {
            question: 'What is Clueso?',
            answer: 'Clueso is an AI-powered video creation platform that helps you turn screen recordings into polished product videos, documentation, and training materials in minutes.'
        },
        {
            question: 'How does the AI work?',
            answer: 'Our AI analyzes your recordings, removes filler words, generates professional voiceovers, adds auto-zooms to key actions, creates captions, and produces step-by-step documentation automatically.'
        },
        {
            question: 'Can I customize the videos?',
            answer: 'Absolutely! Every video created by Clueso is fully customizable. You can edit scripts, change voiceovers, adjust zoom effects, modify captions, and update any visual element.'
        },
        {
            question: 'What formats can I export?',
            answer: 'You can download videos in various formats (MP4, WebM), embed them on your website, or share them as links. Documentation can be exported as PDF, HTML, or Markdown.'
        },
        {
            question: 'Is there a free trial?',
            answer: 'Yes! You can get started with Clueso for free. No credit card required. Try it out and see how it transforms your video creation workflow.'
        },
        {
            question: 'What languages are supported?',
            answer: 'Clueso supports 37+ languages for voiceovers, captions, and documentation. Translate your content with one click to reach a global audience.'
        }
    ];

    return (
        <section className="faq section" id="faq">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                </motion.div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <Accordion question={faq.question} answer={faq.answer} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
