const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure uploads folder exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Storage config (disk)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // save to uploads/ folder
  },
  filename: (req, file, cb) => {
    // Unique filename: timestamp + extension
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// File filter (allow only images & pdf for now)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error("Only JPG, PNG, and PDF files are allowed"), false);
  }
  cb(null, true);
};

// Upload instance
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
  fileFilter
});

module.exports = upload;
