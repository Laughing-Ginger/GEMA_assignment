const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Optional: connect to MongoDB if MONGO_URI is provided
if (process.env.MONGO_URI) {
  connectDB();
} else {
  console.log("MONGO_URI not set — running without database (in-memory mode).");
}

app.use("/api/enquiry", enquiryRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Workshop Enquiry API is running." });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// Only start a listening server when run directly (local dev).
// On Vercel the app is imported and invoked as a serverless function.
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
