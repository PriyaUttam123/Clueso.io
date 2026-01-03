import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Button from '../common/Button';
import { useAuth } from '../../context/AuthContext';
import { Mail, Lock, CheckCircle, AlertCircle } from 'lucide-react';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (response.ok) {
                // Login successful
                login({ email, token: data.token });
                navigate('/');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            setError('Unable to connect to server. Please ensure backend is running.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-page-wrapper">
            <Navbar />
            <div className="auth-content">
                <div className="auth-card">
                    <div className="auth-header">
                        <h2>Welcome back</h2>
                        <p>Enter your details to access your account</p>
                    </div>

                    {error && (
                        <div className="auth-error">
                            <AlertCircle size={18} />
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="auth-form">
                        <div className="form-group">
                            <label>Email Address</label>
                            <div className="input-with-icon">
                                <Mail className="input-icon" size={20} />
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    value={email}
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <div className="input-with-icon">
                                <Lock className="input-icon" size={20} />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-options">
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>

                        <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </form>

                    <div className="auth-divider">
                        <span>OR</span>
                    </div>

                    <button className="google-auth-btn">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
                        Sign in with Google
                    </button>

                    <p className="auth-footer">
                        Don't have an account? <Link to="/signup">Sign up for free</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
