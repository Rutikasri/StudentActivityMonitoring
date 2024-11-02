import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './TeamMember.css'; // Import your CSS styles
import Img2 from "../assets/Img2.png";
import task from "../assets/task.png";

function TeamMember() {
    // State to hold the file and URL submissions
    const [submissions, setSubmissions] = useState([]);
    const [fileInput, setFileInput] = useState(null);
    const [urlInput, setUrlInput] = useState("");

    // Handle file input change
    const handleFileChange = (e) => {
        setFileInput(e.target.files[0]);
    };

    // Handle URL input change
    const handleUrlChange = (e) => {
        setUrlInput(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (fileInput || urlInput) {
            const newSubmission = {
                id: Date.now(),
                fileName: fileInput ? fileInput.name : null,
                url: urlInput || null,
                date: new Date().toLocaleDateString(),
            };
            setSubmissions([...submissions, newSubmission]);
            setFileInput(null);
            setUrlInput("");
            e.target.reset(); // Reset the form
        }
    };

    // Handle delete submission
    const handleDelete = (id) => {
        setSubmissions(submissions.filter(submission => submission.id !== id));
    };

    return (
        <div className="teamlead-container">
            <Sidebar /> {/* Include the Sidebar component here */}
            <div className="main-content">
                <h1>Team Lead</h1>
                <div className="member-name">
                    <img src={Img2} alt="Srinu Reddy" />
                    <div>
                        <h3>Srinu Reddy</h3>
                        <p>Joined 2 months ago</p>
                    </div>
                    <h3>226Q1A4209</h3>
                </div>
                <h2>Tasks</h2>
                <div className="tasks">
                    <div className="task">
                        <img src={task} alt="Task" />
                        <div>
                            <h3>Write an essay on the history of AI</h3>
                            <p>Sep 12, 2024</p>
                        </div>
                        <button className="status active">Mark as done</button>
                    </div>
                    <div className="task">
                        <img src={task} alt="Task" />
                        <div>
                            <h3>Complete the Python Programming Quiz</h3>
                            <p>Sep 12, 2024</p>
                        </div>
                        <button className="status active">Mark as done</button>
                    </div>
                    <div className="task">
                        <img src={task} alt="Task" />
                        <div>
                            <h3>Daily work update</h3>
                            <p>Sep 13, 2024</p>
                        </div>
                        <button className="status inactive">Mark as done</button>
                    </div>
                </div>

                {/* File and URL Submission Form */}
                <h2>Submit Your Work</h2>
                <form className="submission-form" onSubmit={handleSubmit}>
                    <label>Upload Task File</label>
                    <input type="file" onChange={handleFileChange} />
                    <label>Enter Task URL</label>
                    <input
                        type="text"
                        placeholder="https://example.com"
                        value={urlInput}
                        onChange={handleUrlChange}
                    />
                    <button type="submit">Submit</button>
                </form>

                {/* Display Submitted Files and URLs */}
                <h2>Submissions</h2>
                <div className="tasks">
                    {submissions.map((submission) => (
                        <div key={submission.id} className="task">
                            <img src={task} alt="Task" />
                            <div>
                                <h3>{submission.fileName ? submission.fileName : "URL Submission"}</h3>
                                <p>{submission.date}</p>
                                {submission.url && (
                                    <a href={submission.url} target="_blank" rel="noopener noreferrer">
                                        {submission.url}
                                    </a>
                                )}
                            </div>
                            <button className="status active">SUBMITTED</button>
                            <button 
                                className="delete-btn" 
                                onClick={() => handleDelete(submission.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamMember;
