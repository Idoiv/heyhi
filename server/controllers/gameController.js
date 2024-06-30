const Game = require('../models/Game');
const Player = require('../models/Player');

const createGame = async (req, res) => {
    try {
        const game = new Game();
        await game.save();
        res.json(game);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const addPlayer = async (req, res) => {
    const { name, gameId } = req.body;
    try {
        const player = new Player({ name });
        await player.save();

        const game = await Game.findById(gameId);
        game.players.push(player);
        await game.save();

        res.json(game);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const generateTeams = async (req, res) => {
    const { gameId } = req.params;
    try {
        const game = await Game.findById(gameId).populate('players');
        const players = [...game.players];

        // Shuffle players
        players.sort(() => 0.5 - Math.random());

        const mid = Math.ceil(players.length / 2);
        game.teams.teamA = players.slice(0, mid);
        game.teams.teamB = players.slice(mid);

        // Optional: Randomize goalkeepers
        if (req.query.randomGoalkeeper === 'true') {
            const goalkeepers = [game.teams.teamA.pop(), game.teams.teamB.pop()];
            game.goalkeepers = goalkeepers;
        }

        await game.save();
        res.json(game);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const getGame = async (req, res) => {
    const { gameId } = req.params;
    try {
        const game = await Game.findById(gameId).populate('players teams.teamA teams.teamB goalkeepers');
        if (!game) {
            return res.status(404).json({ msg: 'Game not found' });
        }
        res.json(game);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const removePlayer = async (req, res) => {
    const { gameId, playerId } = req.params;
    try {
        const game = await Game.findById(gameId);
        if (!game) {
            return res.status(404).json({ msg: 'Game not found' });
        }

        game.players = game.players.filter(player => player.toString() !== playerId);
        game.teams.teamA = game.teams.teamA.filter(player => player.toString() !== playerId);
        game.teams.teamB = game.teams.teamB.filter(player => player.toString() !== playerId);
        game.goalkeepers = game.goalkeepers.filter(player => player.toString() !== playerId);

        await game.save();
        res.json(game);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const resetGame = async (req, res) => {
    const { gameId } = req.params;
    try {
        const game = await Game.findById(gameId);
        if (!game) {
            return res.status(404).json({ msg: 'Game not found' });
        }

        game.teams.teamA = [];
        game.teams.teamB = [];
        game.goalkeepers = [];

        await game.save();
        res.json(game);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = { createGame, addPlayer, generateTeams, getGame, removePlayer, resetGame };
