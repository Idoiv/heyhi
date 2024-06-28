const Tool = require('../models/tool');

// @desc    Get all tools
// @route   GET /api/tools
// @access  Public
const getTools = async (req, res) => {
    try {
        const tools = await Tool.find();
        res.json(tools);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// @desc    Add a new tool
// @route   POST /api/tools
// @access  Public
const addTool = async (req, res) => {
    const { name, description, url } = req.body;
    try {
        const newTool = new Tool({
            name,
            description,
            url
        });

        const tool = await newTool.save();
        res.json(tool);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getTools,
    addTool
};
