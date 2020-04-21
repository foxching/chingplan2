import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ProjectOption from "./ProjectOption";
const ProjectSummary = ({ project }) => {
  dayjs.extend(relativeTime);
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-4">
        <Link
          to={`/project/${project.projectId}`}
          className="black-text darken-2"
        >
          <span className="card-title">{project.title}</span>
        </Link>
        <p>
          Posted by{" "}
          <Link to={`/users/${project.handle}`} className="grey-text">
            {project.handle}
          </Link>
        </p>
        <p className="grey-text">{dayjs(project.createdAt).fromNow()}</p>
        <ProjectOption projectId={project.projectId} />
      </div>
    </div>
  );
};

export default ProjectSummary;
