import React from 'react';
import useAuth from '../hooks/useAuth';
import LoginButton from './LoginButton';

const AuthButton = () => {
    const { user, loading } = useAuth();

    const handleLogout = () => {
        window.location.href = '/.auth/logout';
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {user ? (
                <button className="btn btn-danger" onClick={handleLogout}>Log Out</button>
            ) : (
                <LoginButton />
            )}
        </div>
    );
};

export default AuthButton;
