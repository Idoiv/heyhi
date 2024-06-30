import React, { useState } from 'react';
import { createGame, addPlayer, generateTeams, removePlayer, resetGame } from '../services/GameServices';
import './HomePage.css';

const HomePage = () => {
    const [game, setGame] = useState(null);
    const [playerName, setPlayerName] = useState('');
    const [randomGoalkeeper, setRandomGoalkeeper] = useState(false);

    const handleCreateGame = async () => {
        const newGame = await createGame();
        setGame(newGame);
    };

    const handleAddPlayer = async () => {
        if (playerName && game) {
            const updatedGame = await addPlayer(playerName, game._id);
            setGame(updatedGame);
            setPlayerName('');
        }
    };

    const handleGenerateTeams = async () => {
        if (game) {
            const updatedGame = await generateTeams(game._id, randomGoalkeeper);
            setGame(updatedGame);
        }
    };

    const handleRemovePlayer = async (playerId) => {
        if (game) {
            const updatedGame = await removePlayer(game._id, playerId);
            setGame(updatedGame);
        }
    };

    const handleResetGame = async () => {
        if (game) {
            const updatedGame = await resetGame(game._id);
            setGame(updatedGame);
        }
    };

    return (
        <div className="home-page">
            <h1>Soccer Game Organizer</h1>
            {!game ? (
                <button onClick={handleCreateGame}>Create Game</button>
            ) : (
                <div>
                    <input
                        type="text"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        placeholder="Player Name"
                    />
                    <button onClick={handleAddPlayer}>Add Player</button>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            checked={randomGoalkeeper}
                            onChange={(e) => setRandomGoalkeeper(e.target.checked)}
                        />
                        Randomize Goalkeeper
                    </label>
                    <button onClick={handleGenerateTeams}>Generate Teams</button>
                    <button onClick={handleResetGame}>Reset Game</button>
                    <div>
                        <h2>Players:</h2>
                        <ul>
                            {game.players.map((player) => (
                                <li key={player._id}>
                                    {player.name}
                                    <button onClick={() => handleRemovePlayer(player._id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="teams">
                        <div>
                            <h3>Team A</h3>
                            <ul>
                                {game.teams.teamA.map((player) => (
                                    <li key={player._id}>{player.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Team B</h3>
                            <ul>
                                {game.teams.teamB.map((player) => (
                                    <li key={player._id}>{player.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {game.goalkeepers.length > 0 && (
                        <div className="goalkeepers">
                            <h2>Goalkeepers:</h2>
                            <ul>
                                {game.goalkeepers.map((player) => (
                                    <li key={player._id}>{player.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default HomePage;
