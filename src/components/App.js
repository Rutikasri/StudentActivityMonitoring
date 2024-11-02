// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../components/MainPage';
import Login from '../components/Login';
import Signup from '../components/SignUp';
import Home from '../components/HomePage';
import Team1 from '../components/Team1';
import TeamLead from '../components/TeamLead';
import TeamMember from '../components/TeamMember';
import Hackathon from '../components/Hackathon'; // Import Hackathon component
import Tasks from '../components/Tasks';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/team1" element={<Team1 />} />
                <Route path="/team-lead" element={<TeamLead />} />
                <Route path="/team-member" element={<TeamMember />} />
                <Route path="/hackathon" element={<Hackathon />} /> {/* Route for Hackathon */}
                <Route path="/tasks" element={<Tasks />} /> 
            </Routes>
        </Router>
    );
}

export default App;