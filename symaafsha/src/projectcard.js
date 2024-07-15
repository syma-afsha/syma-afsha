import React, { useState } from 'react';

import './project.css'; // Import your CSS here
function ProjectCard({ title, description, imageUrl, videoUrl, codeUrl }) {
    const [videoVisible, setVideoVisible] = useState(false);

    const toggleContent = () => {
        setVideoVisible(!videoVisible);
    };

    const renderContent = () => {
        if (videoUrl) {
            return (
                <iframe
                    className="card-video"
                    src={videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    style={{ height: videoVisible ? '500px' : '0', overflow: 'hidden' }}
                ></iframe>
            );
        } else if (codeUrl) {
            return (
                <a href={codeUrl} target="_blank" rel="noopener noreferrer" style={{ display: videoVisible ? 'block' : 'none' }}>
                    Visit the code repository
                </a>
            );
        }
    };

    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-description">
                <h3>{title}</h3>
                <p>{description}</p>
                <button onClick={toggleContent} className="toggle-content">
                    {videoVisible ? 'Hide Details' : 'View Details'}
                </button>
                {renderContent()}
            </div>
        </div>
    );
}
export default ProjectCard;