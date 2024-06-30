import React from 'react';

const LoginButton = () => {
    const handleLogin = () => {
        window.location.href = '/.auth/login/google';
    };

    return (
        <button onClick={handleLogin} className="btn btn-primary">
            Log In with Google
        </button>
    );
};

export default LoginButton;
