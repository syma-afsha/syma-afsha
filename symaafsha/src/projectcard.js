import React, { useState } from 'react';
import './project.css'; // Ensure the CSS path is correct

function ProjectCard({ id, title, description, imageUrl, videoUrl, codeUrl }) {
    const [contentVisible, setContentVisible] = useState(false);

    // Function to toggle content visibility
    const toggleContent = () => {
        setContentVisible(!contentVisible);
    };

    // Helper function to extract YouTube video ID from URL
    const extractYouTubeID = (url) => {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : null;
    };

    // Determine button label and content rendering based on available URLs
    const buttonLabel = codeUrl && id >= 5 ? 'Code Details' : 'Watch Video';
    const renderContent = () => {
        if (videoUrl && id !== 5) {
            const videoID = extractYouTubeID(videoUrl);
            return (
                <iframe
                    className="card-video"
                    src={`https://www.youtube.com/embed/${videoID}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    style={{ height: contentVisible ? '500px' : '0', overflow: 'hidden' }}
                ></iframe>
            );
        } else if (codeUrl && id >= 5) {
            return (
                <a href={codeUrl} target="_blank" rel="noopener noreferrer" style={{ display: contentVisible ? 'block' : 'none' }}>
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
                    {contentVisible ? 'Hide Details' : buttonLabel}
                </button>
                {renderContent()}
            </div>
        </div>
    );
}

export default ProjectCard;
