import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
    LayoutGrid, Folder, Video, Users, BarChart2, Settings, Trash2,
    Plus, Search, Rocket, Monitor, Upload, FileText, X, Play, Film,
    Zap, Mic, Globe
} from 'lucide-react';
import './Dashboard.css';

const NewProjectModal = ({ onClose, onUpload }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div>
                        <h2>New project</h2>
                        <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Clueso creates stunning videos and step-by-step guides</p>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                        <X size={24} />
                    </button>
                </div>

                <div className="modal-option">
                    <div className="modal-option-icon">
                        <Plus size={24} />
                    </div>
                    <div>
                        <h3>Start blank project</h3>
                        <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Create a new project from scratch.</p>
                    </div>
                </div>

                <div className="modal-option" style={{ borderColor: '#F43F5E' }}>
                    <div className="modal-option-icon" style={{ background: 'rgba(244, 63, 94, 0.1)', color: '#F43F5E' }}>
                        <Video size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Capture screen-recording</h3>
                            <span style={{ fontSize: '0.7rem', background: '#F43F5E', padding: '2px 6px', borderRadius: '4px', color: 'white' }}>Recommended</span>
                        </div>
                        <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Record any process on your screen.</p>
                    </div>
                </div>

                <div className="modal-option" onClick={onUpload}>
                    <div className="modal-option-icon" style={{ background: 'rgba(234, 179, 8, 0.1)', color: '#EAB308' }}>
                        <Upload size={24} />
                    </div>
                    <div>
                        <h3>Upload a video</h3>
                        <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Upload a screen-recording from your computer.</p>
                    </div>
                </div>

                <div className="modal-option">
                    <div className="modal-option-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#A855F7' }}>
                        <FileText size={24} />
                    </div>
                    <div>
                        <h3>Upload a slide deck</h3>
                        <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Turn any PDF or PPT into a narrated video.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Placeholder data
    const projects = [
        { name: 'Untitled', creator: user?.name || user?.email?.split('@')[0] || 'User', updated: 'Just now', created: 'Just now', status: 'Unpublished' }
    ];

    const handleUploadClick = () => {
        navigate('/editor');
    };

    return (
        <div className="dashboard-layout">
            {/* Sidebar */}
            <aside className="sidebar">
                <a href="/" className="sidebar-logo">
                    <Rocket color="#F43F5E" fill="#F43F5E" size={24} />
                    <span>Clueso</span>
                </a>

                <button className="new-video-btn" onClick={() => setIsModalOpen(true)}>
                    <Plus size={20} />
                    New video
                </button>

                <div className="search-bar" style={{ margin: '0 0 1.5rem', background: '#1c1c2e' }}>
                    <Search size={16} color="#9ca3af" />
                    <input type="text" placeholder="Search..." />
                </div>

                <nav className="nav-menu">
                    <a href="#" className="nav-item active"><LayoutGrid size={18} /> Home</a>
                    <a href="#" className="nav-item"><Folder size={18} /> All Projects</a>
                    <a href="#" className="nav-item"><Video size={18} /> Video Templates</a>
                    <a href="#" className="nav-item"><Zap size={18} /> Auto-update</a>
                    <a href="#" className="nav-item"><Users size={18} /> Team</a>
                    <a href="#" className="nav-item"><BarChart2 size={18} /> Analytics</a>
                </nav>

                <div className="nav-menu" style={{ flex: 0, marginTop: '2rem', borderTop: '1px solid #2d2d45', paddingTop: '1rem' }}>
                    <a href="#" className="nav-item"><Settings size={18} /> Settings</a>
                    <a href="#" className="nav-item"><Trash2 size={18} /> Trash</a>
                </div>

                <div className="sidebar-footer">
                    <div className="trial-card">
                        <p>Your trial expires in 7 days</p>
                        <span className="upgrade-link">Upgrade your plan</span>
                    </div>

                    <div className="user-profile">
                        <div className="avatar">{(user?.email?.[0] || 'U').toUpperCase()}</div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{user?.name || user?.email?.split('@')[0]}</div>
                            <div style={{ fontSize: '0.75rem', color: '#9ca3af', textOverflow: 'ellipsis', overflow: 'hidden' }}>{user?.email}</div>
                        </div>
                        <button onClick={logout} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}>
                            <Settings size={14} />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                <div className="hero-banner">
                    <h1>Make something awesome</h1>
                    <p>Create stunning product videos and docs</p>
                    {/* Decorative abstract shapes could be added here as background images */}
                </div>

                <div className="section-title">
                    <Video size={18} /> Create a new video
                </div>

                <div className="cards-grid">
                    <div className="action-card" onClick={() => setIsModalOpen(true)}>
                        <div className="action-card-content">
                            <h3>Record screen</h3>
                            <p>Turn a screen-recording into a studio-style video.</p>
                        </div>
                        <div className="action-icon">
                            <Monitor color="#F43F5E" />
                        </div>
                    </div>

                    <div className="action-card" onClick={() => setIsModalOpen(true)}>
                        <div className="action-card-content">
                            <h3>Upload a video</h3>
                            <p>Upload a screen-recording. Get a studio-style video.</p>
                        </div>
                        <div className="action-icon">
                            <Upload color="#EAB308" />
                        </div>
                    </div>

                    <div className="action-card" onClick={() => setIsModalOpen(true)}>
                        <div className="action-card-content">
                            <h3>Upload a slide deck</h3>
                            <p>Turn any PDF or PPT into a narrated video.</p>
                        </div>
                        <div className="action-icon">
                            <FileText color="#A855F7" />
                        </div>
                    </div>
                </div>

                <div className="section-title">
                    <Zap size={18} /> AI tools <span style={{ fontSize: '0.7rem', background: '#6366f1', padding: '2px 6px', borderRadius: '4px', marginLeft: '8px' }}>NEW</span>
                </div>

                <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
                    <div className="action-card" style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <div className="action-icon" style={{ width: '36px', height: '36px', background: '#312e81' }}>
                                <Film size={18} color="#818cf8" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '0.95rem' }}>Cuts</h3>
                                <p style={{ fontSize: '0.75rem' }}>Break down long video</p>
                            </div>
                        </div>
                    </div>
                    <div className="action-card" style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <div className="action-icon" style={{ width: '36px', height: '36px', background: '#312e81' }}>
                                <Zap size={18} color="#818cf8" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '0.95rem' }}>Auto-update</h3>
                                <p style={{ fontSize: '0.75rem' }}>Update content automatically</p>
                            </div>
                        </div>
                    </div>
                    <div className="action-card" style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <div className="action-icon" style={{ width: '36px', height: '36px', background: '#312e81' }}>
                                <Globe size={18} color="#818cf8" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '0.95rem' }}>Translator</h3>
                                <p style={{ fontSize: '0.75rem' }}>Dub video into 30+ languages</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-title">
                    Recent projects
                </div>

                <table className="projects-table">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Creator</th>
                            <th>Updated</th>
                            <th>Created</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((p, i) => (
                            <tr key={i}>
                                <td>{p.name}</td>
                                <td>{p.creator}</td>
                                <td>{p.updated}</td>
                                <td>{p.created}</td>
                                <td><span className="status-badge">{p.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </main>

            {isModalOpen && <NewProjectModal onClose={() => setIsModalOpen(false)} onUpload={handleUploadClick} />}
        </div>
    );
};

export default Dashboard;
