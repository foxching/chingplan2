import React from "react";

const ProjectSkeleton = () => {
  const content = Array.from({ length: 1 }).map((item, index) => {
    return (
      <div key={index} className="container section project-details">
        <div className="card z-depth-0 project-details">
          <div className="card-content">
            <div className="skeleton-title2" />
            <p className="skeleton-content2" />
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div className="skeleton-handle2" />
            <div className="skeleton-date2" />
          </div>
        </div>
      </div>
    );
  });

  return <React.Fragment>{content}</React.Fragment>;
};

export default ProjectSkeleton;
