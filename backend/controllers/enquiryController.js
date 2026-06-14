const mongoose = require("mongoose");
const Enquiry = require("../models/Enquiry");
const connectDB = require("../config/db");

const NAME_REGEX = /^.{2,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

// In-memory fallback store (used when MongoDB is not connected)
const inMemoryEnquiries = [];

const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // ---- Validation ----
    const errors = {};

    if (!name || !NAME_REGEX.test(String(name).trim())) {
      errors.name = "Name is required and must be at least 2 characters.";
    }

    if (!email || !EMAIL_REGEX.test(String(email).trim())) {
      errors.email = "A valid email address is required.";
    }

    if (!phone || !PHONE_REGEX.test(String(phone).trim())) {
      errors.phone = "A valid 10-digit phone number is required.";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed. Please check the form fields.",
        errors,
      });
    }

    const enquiryData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      workshop: "AI & Robotics Summer Workshop",
    };

    // Ensure the DB connection is established (cached across invocations).
    await connectDB();

    // ---- Save to MongoDB if connected, else fallback to in-memory ----
    if (mongoose.connection.readyState === 1) {
      const enquiry = await Enquiry.create(enquiryData);
      return res.status(201).json({
        success: true,
        message: "Thank you! Your enquiry has been submitted successfully.",
        data: enquiry,
      });
    } else {
      const record = { id: inMemoryEnquiries.length + 1, ...enquiryData, createdAt: new Date() };
      inMemoryEnquiries.push(record);
      return res.status(201).json({
        success: true,
        message: "Thank you! Your enquiry has been submitted successfully.",
        data: record,
      });
    }
  } catch (err) {
    console.error("Enquiry creation error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong on the server. Please try again later.",
    });
  }
};

module.exports = { createEnquiry };
