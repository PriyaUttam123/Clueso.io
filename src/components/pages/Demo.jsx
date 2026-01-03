import React from 'react';
import Navbar from '../layout/Navbar';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const Demo = () => {
    const navigate = useNavigate();

    return (
        <div className="demo-page">
            <Navbar />
            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>See Clueso in Action</h1>
                <p style={{ marginBottom: '40px', fontSize: '1.2rem', color: '#6b7280' }}>
                    Learn how to turn a messy screen recording into a professional video in 3 steps.
                </p>

                <div className="video-container" style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    aspectRatio: '16/9',
                    backgroundColor: '#000'
                }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                        title="Clueso Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="cta-box" style={{ marginTop: '60px', padding: '40px', backgroundColor: '#f9fafb', borderRadius: '16px' }}>
                    <h2 style={{ marginBottom: '16px' }}>Ready to give it a try?</h2>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <Button size="lg" onClick={() => navigate('/signup')}>Get Started Free</Button>
                        <Button variant="secondary" size="lg" onClick={() => navigate('/')}>Back to Home</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demo;
