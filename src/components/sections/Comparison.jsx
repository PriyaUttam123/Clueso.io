import React, { useState, useEffect, useRef } from 'react';
import './Comparison.css';

const Comparison = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        const width = containerRect.width;

        let position = (x / width) * 100;
        position = Math.max(0, Math.min(100, position));

        setSliderPosition(position);
    };

    // Touch support
    const handleTouchMove = (e) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - containerRect.left;
        const width = containerRect.width;

        let position = (x / width) * 100;
        position = Math.max(0, Math.min(100, position));

        setSliderPosition(position);
    };

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <section className="comparison-section">
            <div className="container">
                <div className="section-header">
                    <h2>Turn raw footage into polished videos</h2>
                    <p>Stop spending hours editing. Clueso automates the boring parts so you can focus on the story.</p>
                </div>

                <div
                    className="comparison-container"
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                >
                    <div className="image-after">
                        <div className="label">Clueso Video</div>
                        {/* Placeholder for After Image - Using a gradient/pattern to simulate polished content */}
                        <div className="content-mockup polished">
                            <div className="mockup-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <div className="mockup-body">
                                <div className="video-player-ui">
                                    <div className="play-button-overlay">▶</div>
                                    <div className="captions">Turn raw footage into polished videos</div>
                                    <div className="cursor-pointer"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="image-before"
                        style={{ width: `${sliderPosition}%` }}
                    >
                        <div className="label">Raw Recording</div>
                        {/* Placeholder for Before Image - Using a simpler design */}
                        <div className="content-mockup raw">
                            <div className="mockup-header">
                                <span className="dot gray"></span>
                                <span className="dot gray"></span>
                                <span className="dot gray"></span>
                            </div>
                            <div className="mockup-body">
                                <div className="screen-content">
                                    <div className="skeleton-line"></div>
                                    <div className="skeleton-line"></div>
                                    <div className="skeleton-block"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="slider-handle"
                        style={{ left: `${sliderPosition}%` }}
                        onMouseDown={handleMouseDown}
                        onTouchStart={() => isDragging.current = true}
                        onTouchEnd={() => isDragging.current = false}
                    >
                        <div className="handle-line"></div>
                        <div className="handle-circle">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 19L2 12L9 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0 }} />
                            </svg>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
