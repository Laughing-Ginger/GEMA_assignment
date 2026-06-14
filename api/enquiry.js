// Vercel serverless function for POST /api/enquiry.
// Reuses the existing Express controller so local dev (backend/server.js) and
// the deployed serverless endpoint share identical validation + persistence logic.
const { createEnquiry } = require("../backend/controllers/enquiryController");

module.exports = (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ success: false, message: "Method not allowed." });
    return;
  }
  return createEnquiry(req, res);
};
