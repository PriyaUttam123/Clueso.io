import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './UseCases.css';

const UseCases = () => {
    const [activeCase, setActiveCase] = useState(0);

    const useCases = [
        { icon: '📚', label: 'Customer Education' },
        { icon: '📱', label: 'Product Marketing' },
        { icon: '🎓', label: 'Learning & Development' },
        { icon: '💼', label: 'Sales Enablement' },
        { icon: '📊', label: 'Product Management' },
        { icon: '💻', label: 'IT Change Management' },
        { icon: '🎯', label: 'Customer Success/Support' },
        { icon: '⚙️', label: 'Engineering' }
    ];

    return (
        <section className="use-cases-built section" id="use-cases">
            <div className="use-cases-built-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="use-cases-built-title">
                        Clueso is built for you
                    </h2>
                    <p className="use-cases-built-subtitle">
                        Explaining software is hard. Clueso makes it easy.
                    </p>
                </motion.div>

                <div className="use-cases-content">
                    <motion.div
                        className="use-cases-sidebar"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {useCases.map((useCase, index) => (
                            <div
                                key={index}
                                className={`use-case-item ${activeCase === index ? 'active' : ''}`}
                                onClick={() => setActiveCase(index)}
                            >
                                <span className="use-case-icon">{useCase.icon}</span>
                                <span className="use-case-label">{useCase.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="use-cases-preview"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="slack-mockup">
                            <div className="slack-header">
                                <div className="slack-logo">
                                    <svg viewBox="0 0 24 24" width="32" height="32">
                                        <path fill="#E91E63" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                                    </svg>
                                    <span>slack</span>
                                </div>
                            </div>
                            <div className="slack-content">
                                <div className="video-thumbnail">
                                    <div className="play-button-large">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                            <circle cx="30" cy="30" r="30" fill="white" opacity="0.2" />
                                            <circle cx="30" cy="30" r="25" fill="white" />
                                            <path d="M24 20L40 30L24 40V20Z" fill="#E91E63" />
                                        </svg>
                                    </div>
                                    <div className="video-title">How to automate your work in Slack</div>
                                </div>
                            </div>
                            <div className="mockup-circles">
                                <div className="circle circle-purple"></div>
                                <div className="circle circle-yellow"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default UseCases;

