const express = require('express');
const { createGame, generateTeams, getGame, resetGame } = require('../controllers/gameController');
const router = express.Router();

router.post('/', createGame);
router.post('/:gameId/teams', generateTeams);
router.get('/:gameId', getGame);
router.post('/:gameId/reset', resetGame);

module.exports = router;
