import React, { useState } from 'react';

import './project.css'; // Import your CSS here
function ProjectCard({ title, imageUrl, videoUrl }) {
    const [videoVisible, setVideoVisible] = useState(false);

    const toggleVideo = () => setVideoVisible(!videoVisible);

    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-description">
                <h3>{title}</h3>
                <button onClick={toggleVideo} className="toggle-video">
                    {videoVisible ? 'Hide Video' : 'Watch Video'}
                </button>
            </div>
            {videoVisible && (
                <video controls src={videoUrl} className="card-video">
                    <source src={videoUrl} type="video/mp4" />
                    
                </video>
            )}
        </div>
    );
}

export default ProjectCard;