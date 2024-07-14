import React from 'react';

import './project.css'; // Import your CSS here
function ProjectCard({ title, description, videoUrl, imageUrl }) {
    return (
        <div className="card">
            <div className="media-container">
                {videoUrl && (
                    <video controls className="media-video">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                {imageUrl && <img src={imageUrl} alt={title} className="media-image" />}
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}


export default ProjectCard;