import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, theme, favorites, onToggleFavorite }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          theme={theme}
          isFavorite={favorites.has(project.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
