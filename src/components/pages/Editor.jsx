import React from 'react';
import { ChevronLeft, Share2, Download, Play, SkipBack, SkipForward, Settings, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Reuse dark theme variables

const Editor = () => {
    const navigate = useNavigate();

    return (
        <div className="editor-page">
            {/* Editor Header */}
            <header style={{
                height: '60px',
                borderBottom: '1px solid var(--dash-border)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                justifyContent: 'space-between',
                background: 'var(--dash-sidebar)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button onClick={() => navigate('/dashboard')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                        <ChevronLeft />
                    </button>
                    <div>
                        <input
                            type="text"
                            defaultValue="Untitled Project"
                            style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '1rem', fontWeight: 600 }}
                        />
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '8px 16px', borderRadius: '6px', border: 'none', display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer' }}>
                        <Share2 size={16} /> Share
                    </button>
                    <button style={{ background: 'var(--dash-accent)', color: '#fff', padding: '8px 16px', borderRadius: '6px', border: 'none', display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer' }}>
                        <Download size={16} /> Export
                    </button>
                </div>
            </header>

            {/* Main Workspace */}
            <div style={{ flex: 1, display: 'flex' }}>
                {/* Left Sidebar - Assets */}
                <div style={{ width: '240px', borderRight: '1px solid var(--dash-border)', padding: '20px', background: 'var(--dash-sidebar)' }}>
                    <div style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#9ca3af', fontWeight: 600 }}>ASSETS</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div style={{ height: '80px', background: '#2d2d45', borderRadius: '8px' }}></div>
                        <div style={{ height: '80px', background: '#2d2d45', borderRadius: '8px' }}></div>
                        <div style={{ height: '80px', background: '#2d2d45', borderRadius: '8px' }}></div>
                    </div>
                </div>

                {/* Center - Preview */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b0b15' }}>
                    <div style={{ width: '80%', aspectRatio: '16/9', background: '#000', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: '1px solid #2d2d45' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                            <Play fill="#fff" size={24} />
                        </div>
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
                            <span>00:00</span>
                            <span>05:30</span>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Properties */}
                <div style={{ width: '280px', borderLeft: '1px solid var(--dash-border)', padding: '20px', background: 'var(--dash-sidebar)' }}>
                    <div style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#9ca3af', fontWeight: 600 }}>PROPERTIES</div>
                    <div style={{ background: '#2d2d45', height: '40px', borderRadius: '6px', marginBottom: '12px' }}></div>
                    <div style={{ background: '#2d2d45', height: '40px', borderRadius: '6px', marginBottom: '12px' }}></div>
                    <div style={{ background: '#2d2d45', height: '120px', borderRadius: '6px', marginBottom: '12px' }}></div>
                </div>
            </div>

            {/* Bottom - Timeline */}
            <div style={{ height: '200px', borderTop: '1px solid var(--dash-border)', background: 'var(--dash-sidebar)', padding: '10px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#9ca3af' }}>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <Settings size={18} />
                        <Layers size={18} />
                    </div>
                    <div>
                        <SkipBack size={18} /> <Play size={18} /> <SkipForward size={18} />
                    </div>
                    <div>Scale</div>
                </div>
                <div style={{ position: 'relative', height: '140px', background: '#181826', borderRadius: '8px', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: '20px', bottom: 0, width: '2px', background: 'var(--dash-accent)' }}></div>
                    <div style={{ position: 'absolute', top: '40px', left: '40px', width: '300px', height: '40px', background: '#6366f1', borderRadius: '6px', opacity: 0.8 }}></div>
                    <div style={{ position: 'absolute', top: '90px', left: '80px', width: '150px', height: '30px', background: '#10b981', borderRadius: '6px', opacity: 0.8 }}></div>
                </div>
            </div>
        </div>
    );
};

export default Editor;
