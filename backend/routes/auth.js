const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path as necessary

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET; // Ensure you have this in your .env file

// Debugging line to check the value of JWT_SECRET
console.log('JWT_SECRET:', JWT_SECRET);

// Signup route
router.post('/signup', async (req, res) => {
    const { name, rollno, email, password, team } = req.body;

    // Check for missing fields
    if (!name || !rollno || !email || !password || !team) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const existingUser  = await User.findOne({ email });
        if (existingUser ) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, rollno, email, password: hashedPassword, team });

        await user.save();
        res.status(201).json({ message: 'User  registered successfully' });
    } catch (error) {
        console.error('Signup Error:', error); // Log error for debugging
        res.status(500).json({ message: 'Server error' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Check for missing fields
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    console.log('Login attempt with email:', email); // Log email for debugging

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.error('User  not found');
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.error('Password does not match');
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;