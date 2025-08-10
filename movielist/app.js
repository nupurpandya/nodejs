const express = require("express");

const app = express();

const movieRouter=require('./routes/movieRoute');

app.use(express.json());

app.use('/movie',movieRouter)
module.exports = app;
