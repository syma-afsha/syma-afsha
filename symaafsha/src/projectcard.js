import React, { useState } from 'react';

import './project.css'; // Import your CSS here
function ProjectCard({ title, imageUrl, videoUrl }) {
    const [videoVisible, setVideoVisible] = useState(false);

    const handleVideoButton = () => {
        // This function could also open a modal or a new window with the video
        setVideoVisible(!videoVisible);
    };

    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
                <h3>{title}</h3>
                <button onClick={handleVideoButton} className="video-button">
                    {videoVisible ? "Hide Video" : "Watch Video"}
                </button>
            </div>
            {videoVisible && (
                <video controls className="card-video">
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
}

export default ProjectCard;