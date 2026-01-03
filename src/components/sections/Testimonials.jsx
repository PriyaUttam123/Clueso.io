import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const stats = [
        { rating: '4.9', label: 'Average Rating' },
        { count: '100,000+', label: 'Happy Users' }
    ];

    const companies = [
        'Google', 'Microsoft', 'Amazon', 'Salesforce', 'HubSpot', 'Slack'
    ];

    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">
                        You're in <span className="text-gradient">good company</span>
                    </h2>
                </motion.div>

                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="stat-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                            </div>
                            <div className="stat-value">{stat.rating || stat.count}</div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="companies-grid"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {companies.map((company, index) => (
                        <div key={index} className="company-logo">
                            {company}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
