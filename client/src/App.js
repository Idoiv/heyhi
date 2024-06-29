import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import HomePage from './pages/HomePage.js';
import ToolsPage from './pages/ToolsPage.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container mt-5">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/tools" element={<ToolsPage />} />
                        {/* Add other routes as needed */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
