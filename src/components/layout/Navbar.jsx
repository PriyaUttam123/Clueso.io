import React, { useState, useEffect } from 'react';
import { Menu, Rocket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const { user, logout } = useAuth();

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
                <Link to="/" className="logo">
                    <Rocket className="logo-icon" />
                    Clueso
                </Link>

                <ul className="nav-links">
                    <li className="nav-item-dropdown">
                        <span className="nav-link">Product <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg></span>
                        <div className="dropdown-menu">
                            <div className="dropdown-item">
                                <div className="icon">✨</div>
                                <div>
                                    <div className="title">Features</div>
                                    <div className="desc">See what Clueso can do</div>
                                </div>
                            </div>
                            <div className="dropdown-item">
                                <div className="icon">🔌</div>
                                <div>
                                    <div className="title">Integrations</div>
                                    <div className="desc">Connect with your tools</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item-dropdown">
                        <span className="nav-link">Resources <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg></span>
                        <div className="dropdown-menu">
                            <div className="dropdown-item">
                                <div className="icon">📝</div>
                                <div>
                                    <div className="title">Blog</div>
                                    <div className="desc">Latest news and tips</div>
                                </div>
                            </div>
                            <div className="dropdown-item">
                                <div className="icon">❓</div>
                                <div>
                                    <div className="title">Help Center</div>
                                    <div className="desc">Get support</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><Link to="/#pricing" className="nav-link">Pricing</Link></li>
                    <li><Link to="/#careers" className="nav-link">Careers</Link></li>
                </ul>

                <div className="nav-actions">
                    {user ? (
                        <div className="user-menu" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{ fontWeight: '600', color: '#374151' }}>Hi, {user.email.split('@')[0]}</span>
                            <Button size="sm" variant="secondary" onClick={logout}>
                                Log out
                            </Button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link">Log in</Link>
                            <Button size="sm" onClick={() => navigate('/signup')}>
                                Get Started Free
                            </Button>
                        </>
                    )}
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
