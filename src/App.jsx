import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Demo from './components/pages/Demo';
import Dashboard from './components/pages/Dashboard';
import Editor from './components/pages/Editor';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/editor" element={<Editor />} />
                {/* Fallback route */}
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App
