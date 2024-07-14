import React, { useState } from 'react';

import './project.css'; // Import your CSS here
function ProjectCard({ title, imageUrl, videoUrl }) {
    const [videoVisible, setVideoVisible] = useState(false);

    const toggleVideo = () => {
        setVideoVisible(!videoVisible);
    };

    // Function to generate YouTube embed URL from a regular YouTube URL
    const getYoutubeEmbedUrl = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
    };

    const embedUrl = getYoutubeEmbedUrl(videoUrl); // Transform YouTube link to an embed link

    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-description">
                <h3>{title}</h3>
                <button onClick={toggleVideo} className="toggle-video">
                    {videoVisible ? 'Hide Video' : 'Watch Video'}
                </button>
            </div>
            {videoVisible && embedUrl && ( // Ensure the URL is valid and video visibility is toggled
                <iframe
                    className="card-video"
                    src={embedUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                ></iframe>
            )}
        </div>
    );
}

export default ProjectCard;