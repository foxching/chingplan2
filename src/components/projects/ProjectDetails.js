import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../../redux/actions/dataAction";
import ProjectSkeleton from "../../util/ProjectSkeleton";

const ProjectDetails = props => {
  const dispatch = useDispatch();
  const { project } = useSelector(state => state.data);
  const { loading } = useSelector(state => state.UI);

  useEffect(() => {
    const getSingleProject = id => dispatch(getProject(id));
    getSingleProject(props.match.params.projectId);
  }, [dispatch, props.match.params.projectId]);

  dayjs.extend(relativeTime);

  const projectMarkup = !loading ? (
    <div className="container section project-details">
      <Helmet>
        <title>{project.title}</title>
        <meta name="description" content="Project Details" />
      </Helmet>
      <div className="card z-depth-0 project-details">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by {project.handle}</div>
          <div>{dayjs(project.createdAt).fromNow()}</div>
        </div>
      </div>
    </div>
  ) : (
    <ProjectSkeleton />
  );
  return projectMarkup;
};

export default ProjectDetails;
