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
    const notes = await Note.find(); // 👈 only fetch name + email
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.updateNoteById = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content, tags },
      { new: true, runValidators: true }
    );
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteNoteById = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json({ message: "Note Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.findFirstByTitle = async (req, res) => {
  const title = req.query.title;
  const note = await Note.findOne({ title: `${title}` });
  res.status(200).json(note);
};
