import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './Tasks.css'; // Ensure you style it as needed

const Tasks = () => {
    // State to store tasks
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    // State to handle new task inputs
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [newTaskType, setNewTaskType] = useState("essay");
    const [newTaskContent, setNewTaskContent] = useState("");

    // State to handle editing
    const [editingTaskId, setEditingTaskId] = useState(null);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddOrUpdateTask = (e) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            title: newTaskTitle,
            type: newTaskType,
            date: new Date().toLocaleDateString('en-GB'),
            content: newTaskType === 'essay' ? newTaskContent : (newTaskType === 'url' ? newTaskContent : newTaskContent.name),
        };

        if (editingTaskId) {
            setTasks(tasks.map(task => task.id === editingTaskId ? newTask : task));
            setEditingTaskId(null);
        } else {
            setTasks([...tasks, newTask]);
        }

        setNewTaskTitle("");
        setNewTaskContent("");
        setNewTaskType("essay");
    };

    const handleEditTask = (task) => {
        setEditingTaskId(task.id);
        setNewTaskTitle(task.title);
        setNewTaskType(task.type);
        setNewTaskContent(task.content);
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="tasks-container">
            <Sidebar />
            <div className="tasks-content"> {/* Add a wrapper for the main content */}
                <h1>Tasks</h1>
                <form onSubmit={handleAddOrUpdateTask} className="task-form">
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        required
                    />
                    <select value={newTaskType} onChange={(e) => setNewTaskType(e.target.value)}>
                        <option value="essay">Essay</option>
                        <option value="url">URL</option>
                        <option value="file">File</option>
                    </select>
                    
                    {newTaskType === "essay" && (
                        <textarea
                            placeholder="Enter essay content"
                            value={newTaskContent}
                            onChange={(e) => setNewTaskContent(e.target.value)}
                            required
                        />
                    )}
                    {newTaskType === "url" && (
                        <input
                            type="text"
                            placeholder="Task URL"
                            value={newTaskContent}
                            onChange={(e) => setNewTaskContent(e.target.value)}
                            required
                        />
                    )}
                    {newTaskType === "file" && (
                        <input
                            type="file"
                            onChange={(e) => setNewTaskContent(e.target.files[0])}
                            required
                        />
                    )}
                    
                    <button type="submit">{editingTaskId ? 'Update Task' : 'Add Task'}</button>
                </form>
                
                <div className="tasks-list">
                    {tasks.length > 0 ? (
                        tasks.map((task) => (
                            <div key={task.id} className="task-item">
                                <h3>{task.title}</h3>
                                <p>Date Assigned: {task.date}</p>
                                <p>Content: {task.type === 'essay' ? task.content : (task.type === 'url' ? task.content : task.content)}</p>
                                {task.type === 'url' && (
                                    <a href={task.content} target="_blank" rel="noopener noreferrer">
                                        {task.content}
                                    </a>
                                )}
                                <button onClick={() => handleEditTask(task)} className="edit-button">Edit</button>
                                <button onClick={() => handleDeleteTask(task.id)} className="delete-button">Delete</button>
                            </div>
                        ))
                    ) : (
                        <p>No tasks available. Please add a task.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
