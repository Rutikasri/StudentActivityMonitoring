import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import SignupPage from "../assets/SignupPage.png";

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        rollno: '',
        email: '',
        password: '',
        team: '', // Ensure this is the correct type based on your schema
    });
    const [errors, setErrors] = useState({});

    // Validation helper functions
    const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
    const validateRollNo = (rollno) => /^[A-Za-z0-9]+$/.test(rollno);
    const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const validateTeam = (team) => /^[0-9]+$/.test(team); // Adjust if `team` is a string

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation logic
        const newErrors = {};
        if (!validateName(formData.name)) newErrors.name = 'Name should contain only letters and spaces';
        if (!validateRollNo(formData.rollno)) newErrors.rollno = 'Roll number should contain only letters and numbers';
        if (!validatePassword(formData.password)) newErrors.password = 'Password must contain at least one uppercase letter, one number, and one special character';
        if (!validateTeam(formData.team)) newErrors.team = 'Team should contain only numbers';

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch('http://localhost:5001/api/auth/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();
                if (response.ok) {
                    console.log('Signup successful:', data.message);
                    navigate('/login');
                } else {
                    console.error('Signup failed:', data); // Log the entire response for better debugging
                }
            } catch (error) {
                console.error('Error during signup:', error);
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="signup-container">
            <div className="form-container">
                <h2>Get Started Now</h2>
                <p>Enter your details below</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label><br />
                        <input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                        {errors.name && <div className="error-message">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="rollno">Roll.No:</label><br />
                        <input
                            id="rollno"
                            type="text"
                            value={formData.rollno}
                            onChange={handleChange}
                            placeholder="Enter your Roll.No"
                            required
                        />
                        {errors.rollno && <div className="error-message">{errors.rollno}</div>}
                    </div>
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
                        {errors.password && <div className="error-message">{errors.password}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="team">Team No:</label><br />
                        <input
                            id="team"
                            type="text" // Change to 'number' if it's strictly numeric
                            value={formData.team}
                            onChange={handleChange}
                            placeholder="Enter your Team"
                            required
                        />
                        {errors.team && <div className="error-message">{errors.team}</div>}
                    </div>
                    <button type="submit">Sign Up</button>
                    <p className="login">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>

            <div className="image-container">
                <img src={SignupPage} alt="Signup Illustration" />
            </div>
        </div>
    );
}

export default Signup;
