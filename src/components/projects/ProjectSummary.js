import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const ProjectSummary = ({ project }) => {
  dayjs.extend(relativeTime);
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by {project.handle}</p>
        <p className="grey-text">{dayjs(project.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
