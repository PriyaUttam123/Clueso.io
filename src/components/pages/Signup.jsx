import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Button from '../common/Button';
import { useAuth } from '../../context/AuthContext';
import { Mail, Lock, User, AlertCircle } from 'lucide-react';
import './Auth.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth(); // Auto-login after signup
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email, password: formData.password })
            });
            const data = await response.json();

            if (response.ok) {
                // Signup successful - Auto login mock
                login({ email: formData.email, name: formData.name, token: 'mock-jwt-token' });
                navigate('/');
            } else {
                setError(data.message || 'Registration failed');
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
                        <h2>Create your account</h2>
                        <p>Start creating amazing product videos today</p>
                    </div>

                    {error && (
                        <div className="auth-error">
                            <AlertCircle size={18} />
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSignup} className="auth-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <div className="input-with-icon">
                                <User className="input-icon" size={20} />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <div className="input-with-icon">
                                <Mail className="input-icon" size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@company.com"
                                    value={formData.email}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <div className="input-with-icon">
                                <Lock className="input-icon" size={20} />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Create a password"
                                    value={formData.password}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <div className="input-with-icon">
                                <Lock className="input-icon" size={20} />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm password"
                                    value={formData.confirmPassword}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                            {isLoading ? 'Creating Account...' : 'Sign Up'}
                        </Button>
                    </form>

                    <p className="auth-footer">
                        Already have an account? <Link to="/login">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
