import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header'; // Fix the casing of the file name
import HomePage from './pages/homePage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    {/* Add other routes as needed */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
