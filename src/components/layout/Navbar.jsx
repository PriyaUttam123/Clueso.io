import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import Button from '../common/Button';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="/" className="logo">
                    <Rocket className="logo-icon" />
                    Clueso
                </a>

                <ul className="nav-links">
                    <li className="nav-item-dropdown">
                        <a href="#product" className="nav-link">Product <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg></a>
                        <div className="dropdown-menu">
                            <a href="#features" className="dropdown-item">
                                <div className="icon">✨</div>
                                <div>
                                    <div className="title">Features</div>
                                    <div className="desc">See what Clueso can do</div>
                                </div>
                            </a>
                            <a href="#integrations" className="dropdown-item">
                                <div className="icon">🔌</div>
                                <div>
                                    <div className="title">Integrations</div>
                                    <div className="desc">Connect with your tools</div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className="nav-item-dropdown">
                        <a href="#resources" className="nav-link">Resources <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg></a>
                        <div className="dropdown-menu">
                            <a href="#blog" className="dropdown-item">
                                <div className="icon">📝</div>
                                <div>
                                    <div className="title">Blog</div>
                                    <div className="desc">Latest news and tips</div>
                                </div>
                            </a>
                            <a href="#help" className="dropdown-item">
                                <div className="icon">❓</div>
                                <div>
                                    <div className="title">Help Center</div>
                                    <div className="desc">Get support</div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li><a href="#pricing" className="nav-link">Pricing</a></li>
                    <li><a href="#careers" className="nav-link">Careers</a></li>
                </ul>

                <div className="nav-actions">
                    <a href="/login" className="nav-link">Log in</a>
                    <Button size="sm">Get Started Free</Button>
                </div>

                <button className="mobile-menu-btn">
                    <Menu />
                </button>
            </div>

            <div className="navbar-gradient-blob"></div>
        </nav>
    );
};

export default Navbar;
