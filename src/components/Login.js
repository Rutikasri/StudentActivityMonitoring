import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import LoginPage from "../assets/LoginPage.png";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errorMessages, setErrorMessages] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Attempting login with:', formData); // Debugging: log formData

            const response = await fetch('http://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Backend error response:', errorData); // Debugging: log backend error
                setErrorMessages(errorData.message || 'Login failed. Please try again.');
                return;
            }

            const data = await response.json();
            console.log('Login successful:', data); // Debugging: log success data

            if (data.token) {
                localStorage.setItem('token', data.token); // Store token for session
                navigate('/home'); // Redirect to home page
            } else {
                console.error('Token missing from response'); // Debugging: log missing token
                setErrorMessages('Login successful, but token is missing.');
            }
        } catch (error) {
            console.error('Error during login:', error); // Debugging: log network error
            setErrorMessages('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <div className="form-container">
                <h2>Welcome Back!</h2>
                <p>Enter your Credentials to access your account</p>
                {errorMessages && <div className="error">{errorMessages}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label><br />
                        <input 
                            id="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="Enter your email" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label><br />
                        <input 
                            id="password" 
                            type="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            placeholder="Enter your password" 
                            required 
                        />
                    </div>
                    <p className="forgot-password">
                        <a href="/forgot-password">Forgot password?</a>
                    </p>
                    <button type="submit">Login</button>
                    <p className="signup">
                        Don't have an account? <a href="/signup">Sign up</a>
                    </p>
                </form>
            </div>
            
            <div className="image-container">
                <img src={LoginPage} alt="Login Illustration" />
            </div>
        </div>
    );
}

export default Login;
