import React, { Component } from "react";
import { Helmet } from "react-helmet";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { connect } from "react-redux";
import { getProject } from "../../redux/actions/dataAction";
import ProjectSkeleton from "../../util/ProjectSkeleton";

class ProjectDetails extends Component {
  componentDidMount() {
    this.props.getProject(this.props.match.params.projectId);
  }

  render() {
    const { project } = this.props.data;
    const { loading } = this.props.UI;
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
  }
}

const mapStateToProps = state => ({
  data: state.data,
  UI: state.UI
});

const mapDispatch = {
  getProject
};

export default connect(
  mapStateToProps,
  mapDispatch
)(ProjectDetails);
