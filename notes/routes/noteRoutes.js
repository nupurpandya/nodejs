const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Create a new task
router.post('/', noteController.createNote);
router.get('/', noteController.getAllNotes);

module.exports = router;
