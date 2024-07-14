import React from 'react';
import MultimediaGallery from './MultimediaGallery';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{project.title}</h2>
        <p>{project.fullDescription}</p>
        <MultimediaGallery media={project.media} />
      </div>
    </div>
  );
}

export default ProjectModal;
