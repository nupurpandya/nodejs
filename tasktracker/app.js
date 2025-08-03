const express = require('express');
const app = express();

const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());

app.use('/api/tasks', taskRoutes); // All task-related routes

module.exports = app;
