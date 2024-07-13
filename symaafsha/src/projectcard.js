import React from 'react';

function ProjectCard({ project, onOpen }) {
  return (
    <div className="project-card" onClick={() => onOpen(project)}>
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
