import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ToolsPage.css';

const ToolsPage = () => {
    const [tools, setTools] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('/api/tools')
            .then(response => {
                setTools(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the tools!", error);
            });
    }, []);

    const filteredTools = tools.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="tools-page">
            <h2>AI Tools and Utilities</h2>
            <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <div className="row">
                {filteredTools.map(tool => (
                    <div className="card" key={tool._id}>
                        <div className="card-body">
                            <h5 className="card-title">{tool.name}</h5>
                            <p className="card-text">{tool.description}</p>
                            <a href={tool.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToolsPage;
