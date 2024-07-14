import React from 'react';

import './project.css'; // Import your CSS here
function ProjectCard({ title, description, mediaUrl, mediaType }) {
    return (
        <div className="card">
            <div className="media-container">
                {mediaType === 'video' ? (
                    <video controls>
                        <source src={mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={mediaUrl} alt={title} />
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