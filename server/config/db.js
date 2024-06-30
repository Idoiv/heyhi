// config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        console.error("MongoDB URI is not defined. Please set the MONGODB_URI environment variable.");
        process.exit(1); // Exit the application with an error code
    }

    console.log('Attempting to connect to MongoDB...');

    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the application with an error code
    }
};

module.exports = connectDB;
