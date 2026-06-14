const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

// CORS configuration for production
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
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

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

