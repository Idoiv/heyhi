const express = require('express');
const router = express.Router();
const { getTools, addTool } = require('../controllers/toolController');

// @route   GET /api/tools
// @desc    Get all tools
router.get('/tools', getTools);

// @route   POST /api/tools
// @desc    Add a new tool
router.post('/tools', addTool);

module.exports = router;
