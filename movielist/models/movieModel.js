const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  movie: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

const Movie= mongoose.model('movielist',movieSchema);
module.exports=Movie