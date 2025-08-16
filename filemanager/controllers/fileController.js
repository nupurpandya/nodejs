const File = require("../models/fileModel");
const fs = require("fs");

// @desc    Upload file
// @route   POST /api/files/upload
exports.createFile = async (req, res) => {
  try {
    const file = new File({
      fileName: req.file.filename,
      path: req.file.path,
      mimetype: req.file.mimetype,
      size: req.file.size,
    });
    await file.save();
    res.status(201).json({ message: "File uploaded successfully", file });
  } catch (err) {
    res.status(500).json({ message: "Upload failed", err });
  }
};

// @desc    Download file
// @route   GET /api/files/download/:id
exports.downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File not found" });
    res.download(file.path, file.filename);
  } catch (error) {
    res.status(500).json({ message: "Download failed", error });
  }
};

// @desc    List all files
// @route   GET /api/files
exports.getAllFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: "Error fetching files", error });
  }
};

// @desc    Delete file
// @route   DELETE /api/files/:id
exports.deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File not found" });

    fs.unlinkSync(file.path); // remove file from disk
    await File.deleteOne({ _id: file._id });

    res.json({ message: "File deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error });
  }
};
