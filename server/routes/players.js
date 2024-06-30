const express = require('express');
const { addPlayer, removePlayer } = require('../controllers/gameController');
const router = express.Router();

router.post('/', addPlayer);
router.delete('/:gameId/:playerId', removePlayer);

module.exports = router;
