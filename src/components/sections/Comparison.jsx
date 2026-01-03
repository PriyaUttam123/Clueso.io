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
                    onClick={handleMouseDown}
                >
                    {/* AFTER VIEW (Polished) */}
                    <div className="image-after">
                        <div className="clueso-badge">
                            <span className="sparkle">✨</span> With Clueso
                        </div>

                        {/* Dark Overlay Effect */}
                        <div className="overlay-dark"></div>

                        {/* Search Dropdown UI (Replicated from image) */}
                        <div className="search-ui-container">
                            <div className="search-bar-expanded">
                                <div className="search-input-group">
                                    <label>Where</label>
                                    <input type="text" value="Cherry Blossoms in" readOnly />
                                </div>
                                <button className="close-btn">×</button>
                            </div>

                            <div className="search-dropdown-results">
                                {[
                                    { name: "Cherry Blossoms Day Spa, Bastrop, TX", icon: "map-pin" },
                                    { name: "Cherry Blossoms, Waltham, MA", icon: "map-pin" },
                                    { name: "Cherry Blossoms, 3 Chome-4 Koenjikita", sub: "Suginami City, Tokyo, Japan", icon: "map-pin" },
                                    { name: "Cherry Blossoms, Vancouver, BC, Canada", icon: "map-pin" },
                                    { name: "Jackson Park Cherry Blossoms, Chicago, IL", icon: "map-pin" }
                                ].map((item, idx) => (
                                    <div className="result-item" key={idx}>
                                        <div className="icon-box">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                        </div>
                                        <div className="text-content">
                                            <div className="name">{item.name}</div>
                                            {item.sub && <div className="sub">{item.sub}</div>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Video Controls */}
                        <div className="video-controls-bar">
                            <div className="tooltip">Unmute to hear the difference</div>
                            <div className="controls-bg">
                                <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                                <div className="divider"></div>
                                <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" /></svg>
                                <div className="divider"></div>
                                <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* BEFORE VIEW (Raw) */}
                    <div
                        className="image-before"
                        style={{ width: `${sliderPosition}%` }}
                    >
                        <div className="raw-ui-mockup">
                            {/* Simple Airbnb Header Mockup */}
                            <div className="nav-mock">
                                <div className="logo-red">
                                    <svg viewBox="0 0 24 24" fill="#FF5A5F" width="32" height="32">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                    airbnb
                                </div>
                                <div className="search-pill">
                                    <div className="glass">Where | Check in | Who</div>
                                    <div className="search-icon-circle">
                                        <svg viewBox="0 0 24 24" fill="white" width="12" height="12"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Filters Bar */}
                            <div className="filters-mock">
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <div className="filter-item" key={i}>
                                        <div className="icon-skel"></div>
                                        <div className="text-skel"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Grid of cards */}
                            <div className="grid-mock">
                                {[1, 2, 3, 4].map(i => (
                                    <div className="card-mock" key={i}>
                                        <div className="img-box">
                                            <div className="heart-icon">♡</div>
                                        </div>
                                        <div className="txt-line title"></div>
                                        <div className="txt-line w-half"></div>
                                        <div className="txt-line w-third"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SLIDER HANDLE */}
                    <div
                        className="slider-handle"
                        style={{ left: `${sliderPosition}%` }}
                        onMouseDown={handleMouseDown}
                        onTouchStart={() => isDragging.current = true}
                        onTouchEnd={() => isDragging.current = false}
                    >
                        <div className="handle-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 17l5-5-5-5M8 17l-5-5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
