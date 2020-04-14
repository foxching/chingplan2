import React from "react";

const ProjectsSkeleton = () => {
  const content = Array.from({ length: 3 }).map((item, index) => (
    <div key={index} className="card z-depth-0 project-summary">
      <div className="card-content">
        <div className="skeleton-title" />
        <div className="skeleton-handle" />
        <div className="skeleton-date" />
      </div>
    </div>
  ));

  return <React.Fragment>{content}</React.Fragment>;
};

export default ProjectsSkeleton;
