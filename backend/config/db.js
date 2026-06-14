const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    // Don't crash the server if DB is unavailable — fallback to in-memory mode
  }
};

module.exports = connectDB;
