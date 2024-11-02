import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Updated path to the new CSS file
import gcclogo from '../assets/Logo.png'; // Update with your actual logo path
import backgroundimage from '../assets/Home image.png'; // Update with your actual background image path

function MainPage() {
    return (
        <div>
            <div className="logo">
                <img src={gcclogo} alt="GCC Logo" />
            </div>
            <div className="header">
                <h1>WELCOME TO GCC</h1>
            </div>
            <div className="App">
                <div className="text-content">
                    <h2>STUDENT ACTIVITY MONITORING</h2>
                    <p>
                        Keep track of GCC activities and <br />
                        contributions to KIET College and see <br />
                        inactive/active statuses. If any faculty or <br />
                        class needs support, they should post <br />
                        a query on the platform, which will be <br />
                        approved by coordinators for <br />
                        deploying students, etc.
                    </p>
                    <Link to="/login">
                        <button>Get Started</button>
                    </Link>
                </div>
                <div className="image-content">
                    <img src={backgroundimage} alt="Home illustration" />
                </div>
            </div>
        </div>
    );
}

export default MainPage;
