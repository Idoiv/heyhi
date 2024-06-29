import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import Footer from './components/Footer';
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
