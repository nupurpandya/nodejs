const express = require("express");

const app = express();

const fileRoutes= require('./routes/fileRoute')

app.use(express.json());

// Routes
app.use("/api/files", fileRoutes);

module.exports = app;
