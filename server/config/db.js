const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const db = process.env.MONGODB_URI;
    console.log(`Connecting to database: ${db}`); // Log the connection string

    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
