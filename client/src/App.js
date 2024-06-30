import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Corrected the casing of the file name
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container mt-5">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
