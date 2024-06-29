import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <h2>Welcome to AI Tools Hub</h2>
            <p>Discover the latest AI tools, tutorials, and news.</p>
            <h3>Featured Tools</h3>
            <div className="featured-tools">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Tool 1</h5>
                        <p className="card-text">Description of Tool 1.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Tool 2</h5>
                        <p className="card-text">Description of Tool 2.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Tool 3</h5>
                        <p className="card-text">Description of Tool 3.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
