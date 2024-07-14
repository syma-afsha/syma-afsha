import React, { useState } from 'react';

import './project.css'; // Import your CSS here
function ProjectCard({ title, description, videoUrl, imageUrl }) {
    const [showVideo, setShowVideo] = useState(true);

    return (
        <div className="card" onClick={() => setShowVideo(!showVideo)}>
            <div className="media-container">
                {showVideo ? (
                    <video controls className="media-video">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={imageUrl} alt={title} className="media-image" />
                )}
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}


export default ProjectCard;