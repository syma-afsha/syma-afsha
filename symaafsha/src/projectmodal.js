import React from 'react';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{project.title}</h2>
        <p>{project.fullDescription}</p>
        <video controls>
          <source src={project.videoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
}

export default ProjectModal;
