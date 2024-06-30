const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
    }],
    teams: {
        teamA: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player',
        }],
        teamB: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player',
        }],
    },
    goalkeepers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
    }]
});

module.exports = mongoose.model('Game', GameSchema);
