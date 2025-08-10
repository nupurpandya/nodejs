const Movie = require("../models/movieModel");

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOneMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const { movie, genre, rating } = req.body;
    await Movie.create({ movie, genre, rating });
    res.status(201).json({ msg: "Movie Added" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const { movie, genre, rating } = req.body;
    await Movie.findByIdAndUpdate(req.params.id,{ movie, genre, rating });
    res.status(200).json({ msg: "Movie Updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Movie Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

