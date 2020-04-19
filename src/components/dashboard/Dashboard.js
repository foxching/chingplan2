import React, { Component } from "react";
import { connect } from "react-redux";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { getProjects, getNotifications } from "../../redux/actions/dataAction";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
    this.props.getNotifications();
  }
  render() {
    const { projects, loading, notifications } = this.props.data;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} loading={loading} />
          </div>
          <div className="col s12 m5 offset-m1 ">
            <Notifications notifications={notifications} loading={loading} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapActionsToProps = {
  getProjects,
  getNotifications
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Dashboard);
