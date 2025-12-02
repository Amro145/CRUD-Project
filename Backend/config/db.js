const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // process.exit(1); // Optional: Exit process with failure
    }
};

module.exports = connectToDb;
