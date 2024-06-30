import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginButton = () => {
    const handleLogin = async (response) => {
        try {
            const idToken = response.credential;
            const res = await axios.post('/.auth/login/google', { id_token: idToken });
            console.log('Logged in', res);
            window.location.reload();
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <GoogleLogin
            onSuccess={handleLogin}
            onError={() => console.log('Login Failed')}
        />
    );
};

export default LoginButton;
