// Hackathon.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hackathon.css';
import gcclogo from "../assets/Logo.png"; // Import logo image

function Hackathon() {
    const navigate = useNavigate();

    // const handleBack = () => {
    //     navigate('/home'); // Navigate back to home page
    // };

    const hackathons = [
        { title: 'Python', description: 'This hackathon will help you enhance your Python knowledge and improve your coding.' },
        { title: 'Machine Learning', description: 'This hackathon will help you enhance your ML knowledge and improve your coding.' },
        { title: 'MERN', description: 'This hackathon will help you enhance your MERN knowledge and it will help in your interviews.' },
        { title: 'Front End', description: 'This hackathon will help you enhance your BACKEND knowledge and is necessary for web development.' },
    ];

    return (
        <div className="hackathon-container">
            <aside className="sidebar1">
                <div className='logo'>
                    <img src={gcclogo} alt="Global Logo"/>
                </div>
                <h3 className='student'>Student Monitoring System</h3>
                <div className="menu-header" onClick={() => navigate('/home')}>
                    <span className="menu-icon">☰</span>
                    <span className="menu-text">Dashboard</span>
                </div>
                <ul>
                    <li onClick={() => navigate('/team1')} className="team">
                        <span className="icon">👥</span>
                        <p className='side'>My Team</p>
                    </li>
                </ul>
            </aside>
            <div className="team-page-container">
                <h1>HACKATHONS</h1>
                <div className="hackathon-grid">
                    {hackathons.map((hackathon, index) => (
                        <div key={index} className="hackathon-card">
                            <h2>{hackathon.title}</h2>
                            <p>{hackathon.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hackathon;