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
                    <li><a href="#features" className="nav-link">Features</a></li>
                    <li><a href="#pricing" className="nav-link">Pricing</a></li>
                    <li><a href="#use-cases" className="nav-link">Use Cases</a></li>
                    <li><a href="#company" className="nav-link">Company</a></li>
                </ul>

                <div className="nav-actions">
                    <a href="/login" className="nav-link">Log in</a>
                    <Button size="sm">Get Started Free</Button>
                </div>

                <button className="mobile-menu-btn">
                    <Menu />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
