const express = require('express');
const app = express();

const noteRoutes = require('./routes/noteRoutes');

app.use(express.json());

app.use('/api/notes', noteRoutes); // All note-related routes

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);


module.exports = app;
