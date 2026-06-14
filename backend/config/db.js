const mongoose = require("mongoose");

// Cache the connection promise across serverless invocations so we don't
// open a new connection on every request (which exhausts the Mongo pool).
let cachedPromise = null;

const connectDB = async () => {
  if (!process.env.MONGO_URI) return null;
  if (cachedPromise) return cachedPromise;

  cachedPromise = mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log("MongoDB connected successfully.");
      return conn;
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err.message);
      // Reset so a later request can retry; fall back to in-memory mode.
      cachedPromise = null;
      return null;
    });

  return cachedPromise;
};

module.exports = connectDB;
