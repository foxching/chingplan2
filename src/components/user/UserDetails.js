import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ProjectList from "../projects/ProjectList";
import PublicProfile from "./PublicProfile";
import AuthenticatedProfile from "../../components/user/AuthenticatedProfile";
import ProfileSkeleton from "../../util/ProfileSkeleton";
import { getUserData } from "../../redux/actions/dataAction";

class UserDetails extends Component {
  state = {
    profile: null
  };

  componentDidMount() {
    this.props.getUserData(this.props.match.params.handle);
    axios
      .get(`/user/${this.props.match.params.handle}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          profile: res.data.user
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { projects, loading } = this.props.data;
    const handle = this.props.match.params.handle;
    const userHandle = this.props.user.credentials.handle;
    const { profile } = this.state;
    const { authenticated } = this.props.user;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} loading={loading} />
          </div>
          <div className="col s12 m5 offset-m1">
            {profile === null && <ProfileSkeleton />}
            {profile !== null && !authenticated && handle !== userHandle && (
              <PublicProfile profile={profile} />
            )}
            {profile !== null && authenticated && handle !== userHandle && (
              <PublicProfile profile={profile} />
            )}
            {profile !== null && authenticated && handle === userHandle && (
              <AuthenticatedProfile />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  user: state.user
});

const mapDispatch = {
  getUserData
};
export default connect(
  mapStateToProps,
  mapDispatch
)(UserDetails);
