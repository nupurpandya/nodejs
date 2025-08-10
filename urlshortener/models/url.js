const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortUrl: {
    type: String,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  visitHistory: [
    {
      timeStamps: { type: Number },
    },
  ],
});

const URL=mongoose.model('urlshortener',urlSchema);
module.exports=URL;