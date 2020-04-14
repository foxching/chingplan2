import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectList from "../projects/ProjectList";
import Profile from "./Profile";
import { getUserData } from "../../redux/actions/dataAction";

class UserDetails extends Component {
  componentDidMount() {
    this.props.getUserData(this.props.match.params.handle);
  }

  render() {
    const { projects, loading } = this.props.data;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} loading={loading} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Profile />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatch = {
  getUserData
};
export default connect(
  mapStateToProps,
  mapDispatch
)(UserDetails);
