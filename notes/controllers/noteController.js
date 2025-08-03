const Note = require("../models/noteModel");
exports.createNote = async (req, res) => {
  try {
    const { title, content, tags, userId } = req.body;

    await Note.create({ title, content, tags, user: userId });
    res.status(201).json({ message: "Note created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().populate("user", "name email"); // 👈 only fetch name + email
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
