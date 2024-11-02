// TeamLead.js
import React from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './TeamLead.css'; // Import your CSS styles
import Img1 from "../assets/Img1.png";
import task from "../assets/task.png";
import notdone from "../assets/notdone.png";
import done from "../assets/done.png";

function TeamLead() {
    return (
        <div className="teamlead-container">
            <Sidebar /> {/* Include the Sidebar component here */}
            <div className="main-content">
                <h1>Team Lead</h1>
                <div className="member-name">
                    <img src={Img1} alt="Sahitha" />
                    <div>
                        <h3>Sahitha</h3>
                        <p>Joined 2 months ago</p>
                    </div>
                    <h3>226Q1A4212</h3>
                </div>
                <h2>Task Completion</h2>
                <h2>Tasks</h2>
                <div className="tasks">
                    <div className="task">
                        <img src={task} alt="Task" />
                        <div>
                            <h3>Write an essay on the history of AI</h3>
                            <p>Sep 12,2024</p>
                        </div>
                        <button className="status active">Mark as done</button>
                    </div>
                    <div className="task">
                        <img src={task} alt="Task" />
                        <div>
                            <h3>Complete the Python Programming Quiz</h3>
                            <p>Sep 12,2024</p>
                        </div>
                        <button className="status active">Mark as done</button>
                    </div>
                    <div className="task">
                        <img src={task} alt="Task" />
                        <div>
                            <h3>Daily work update</h3>
                            <p>Sep 13,2024</p>
                        </div>
                        <button className="status inactive">Mark as done</button>
                    </div>
                </div>
                <h2>Tasks Completed</h2>
                <div className="tasks">
                    <div className="task">
                        <img src={notdone} alt="Srinu Reddy" />
                        <div>
                            <h3>SRINU</h3>
                            <p>Sep 11,2024</p>
                        </div>
                        <button className="status active">PENDING</button>
                    </div>
                    <div className="task">
                        <img src={done} alt="Jasmine" />
                        <div>
                            <h3>SAGAR</h3>
                            <p>Sep 12,2024</p>
                        </div>
                        <button className="status active">COMPLETED</button>
                    </div>
                    <div className="task">
                        <img src={done} alt="Surya Sagar" />
                        <div>
                            <h3>RUTIKA</h3>
                            <p>Sep 13,2024</p>
                        </div>
                        <button className="status inactive">COMPLETED</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamLead;
