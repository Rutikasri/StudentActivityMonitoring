import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './HomePage.css'; // Import the CSS styles
import gcclogo from "../assets/Logo.png";

function HomePage() {
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle log out and navigate to the main landing page
    const handleLogout = () => {
        navigate('/'); // Navigate to the root path
    };

    return (
        <div className="home-page">
            <header className="header">
                <img src={gcclogo} alt="Global Logo" className="logo" />
                {/* Button to log out */}
                <button onClick={handleLogout} className="navigate-button">
                    Log Out
                </button>
            </header>
            <h1>Student Monitoring</h1>
            <h2>Teams</h2>
            <div className="team-grid">
                {/* Inline team card creation */}
                <div className="team-card" onClick={() => navigate('/team1')}>
                    <div className="status-icon">✔️</div>
                    <h3>Team 1</h3>
                    <p>All environments are up and running</p>
                </div>

                <div className="team-card error" onClick={() => navigate('/team1')}>
                    <div className="status-icon">✔️</div>
                    <h3>Team 2</h3>
                    <p>All environments are up and running</p>
                </div>
                <div className="team-card error"onClick={() => navigate('/team1')}>
                    <div className="status-icon">✔️</div>
                    <h3>Team 3</h3>
                    <p>All environments are up and running</p>
                </div>
                <div className="team-card" onClick={() => navigate('/team1')}>
                    <div className="status-icon">✔️</div>
                    <h3>Team 4</h3>
                    <p>All environments are up and running</p>
                </div>
                <div className="team-card" onClick={() => navigate('/team1')}>
                    <div className="status-icon">✔️</div>
                    <h3>Team 5</h3>
                    <p>All environments are up and running</p>
                </div>
                <div className="team-card" onClick={() => navigate('/team1')}>
                    <div className="status-icon">✔️</div>
                    <h3>Team 6</h3>
                    <p>All environments are up and running</p>
                </div>
                <div className="team-card" onClick={() => navigate('/team1')}>
                    <div className="status-icon">✔️</div>
                    <h3>Team 7</h3>
                    <p>All environments are up and running</p>
                </div>
                <div className="team-card"onClick={() => navigate('/team1')}>
                    <div className="status-icon">✔️</div>
                    <h3>Team 8</h3>
                    <p>All environments are up and running</p>
                </div>
                <div className="team-card" onClick={() => navigate('/team1')}>
                    <div className="status-icon">✔️</div>
                    <h3>Team 9</h3>
                    <p>All environments are up and running</p>
                </div>
                <div className="team-card" onClick={() => navigate('/team1')}>
                    <div className="status-icon">✔️</div>
                    <h3>Team 10</h3>
                    <p>All environments are up and running</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;