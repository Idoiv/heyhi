import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const createGame = async () => {
    const res = await axios.post(`${API_URL}/games`);
    return res.data;
};

const addPlayer = async (name, gameId) => {
    const res = await axios.post(`${API_URL}/players`, { name, gameId });
    return res.data;
};

const generateTeams = async (gameId, randomGoalkeeper = false) => {
    const res = await axios.post(`${API_URL}/games/${gameId}/teams?randomGoalkeeper=${randomGoalkeeper}`);
    return res.data;
};

const getGame = async (gameId) => {
    const res = await axios.get(`${API_URL}/games/${gameId}`);
    return res.data;
};

const removePlayer = async (gameId, playerId) => {
    const res = await axios.delete(`${API_URL}/players/${gameId}/${playerId}`);
    return res.data;
};

const resetGame = async (gameId) => {
    const res = await axios.post(`${API_URL}/games/${gameId}/reset`);
    return res.data;
};

export { createGame, addPlayer, generateTeams, getGame, removePlayer, resetGame };
