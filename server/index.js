const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 5000;

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
