// Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import gcclogo from "../assets/Logo.png";
import './Sidebar.css'; // Add your styles here

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <aside className="sidebar">
            <div className='logo'>
                <img src={gcclogo} alt="Global Logo" />
            </div>
            <h3 className='student'>Student Monitoring System</h3>
            <div className="menu-header" onClick={() => navigate('/home')}>
                <span className="menu-icon">☰</span>
                <span className="menu-text">Dashboard</span>
            </div>
            <ul>
                <li onClick={() => navigate('/team1')} className="active">
                    <span className="icon">👥</span>
                    <p className='side'>My Team</p>
                </li>
                <li onClick={() => navigate('/Hackathon')}>
                    <span className="icon">🏆</span>
                    <p className='side'>Hackathons</p>
                </li>
                <li onClick={() => navigate('/tasks')}>
                    <span className="icon">📋</span>
                    <p className='side'>Tasks</p>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
