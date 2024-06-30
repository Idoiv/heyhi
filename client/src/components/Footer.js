import React from 'react';
import './Footer.css'; // Import CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <span>&copy; {new Date().getFullYear()} Soccer Game Organizer. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
