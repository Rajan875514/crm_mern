// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors'); // Import cors middleware

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Allows parsing of JSON request bodies
app.use(cors()); // Enable CORS for all routes (important for frontend communication)

// Define a simple root route
app.get('/', (req, res) => {
    res.send('CRM Backend API is running...');
});

// Auth Routes
app.use('/api/auth', require('./routes/auth')); // <-- This line is important

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});