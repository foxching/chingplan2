import React from "react";
import ProjectSummary from "./ProjectSummary";
import ProjectsSkeleton from "../../util/ProjectsSkeleton";

const ProjectList = ({ projects, loading }) => {
  let projectMarkup = !loading ? (
    projects.map(project => (
      <ProjectSummary key={project.projectId} project={project} />
    ))
  ) : (
    <ProjectsSkeleton />
  );

  return projectMarkup;
};

export default ProjectList;
