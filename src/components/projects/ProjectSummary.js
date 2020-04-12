import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const ProjectSummary = ({ project }) => {
  dayjs.extend(relativeTime);
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <Link to={`/project/${project.projectId}`}>
          <span className="card-title">{project.title}</span>
        </Link>
        <p>Posted by {project.handle}</p>
        <p className="grey-text">{dayjs(project.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
