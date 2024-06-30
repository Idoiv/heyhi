import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from './hooks/useAuth';

function App() {
    const { loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container mt-5">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        {/* Add other routes here */}
                        {/* Example of a protected route */}
                        {/* <PrivateRoute path="/protected" element={<ProtectedPage />} /> */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
