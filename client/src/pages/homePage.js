import React, { useEffect, useState } from 'react';
import api from '../services/api';

const HomePage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        api.get('/hello')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>
            <h2>Home Page</h2>
            <p>{message}</p>
        </div>
    );
};

export default HomePage;
