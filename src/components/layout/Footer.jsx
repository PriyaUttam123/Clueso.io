import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const footerLinks = {
        Product: ['Features', 'Pricing', 'Use Cases', 'Integrations', 'Chrome Extension'],
        Company: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'],
        Resources: ['Help Center', 'Documentation', 'Community', 'API Reference', 'Status'],
        Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
    };

    const socialLinks = [
        { icon: Twitter, label: 'Twitter' },
        { icon: Linkedin, label: 'LinkedIn' },
        { icon: Youtube, label: 'YouTube' },
        { icon: Github, label: 'GitHub' }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <Rocket className="logo-icon" />
                            <span>Clueso</span>
                        </div>
                        <p className="footer-tagline">
                            Create incredible product videos,<br />
                            documentation, and more – in minutes, with AI.
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((social, index) => (
                                <a key={index} href="#" className="social-link" aria-label={social.label}>
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className="footer-column">
                                <h4 className="footer-column-title">{category}</h4>
                                <ul className="footer-link-list">
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <a href="#" className="footer-link">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Clueso. All rights reserved.</p>
                    <p>Made with ❤️ for creators worldwide</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
