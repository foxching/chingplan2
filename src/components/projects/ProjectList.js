import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => <ProjectSummary project={project} />)}
    </div>
  );
};

export default ProjectList;
