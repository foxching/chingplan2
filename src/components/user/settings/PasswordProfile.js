import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePassword } from "../../../redux/actions/userAction";
import { clearErrors } from "../../../redux/actions/userAction";

class PaswordProfile extends Component {
  state = {
    oldPassword: "",
    newPassword: "",
    errors: {}
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }

    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ oldPassword: "", newPassword: "", errors: {} });
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  onHandleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const passwordData = {
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword
    };
    this.props.updatePassword(passwordData);
  };

  render() {
    const { errors } = this.state;
    const { loading } = this.props.UI;
    return (
      <div className="section">
        <div className="card card medium z-depth-0">
          <div className="card-content">
            <div className="profile">
              <p className="black-text flow-text">Change Password</p>
              <form onSubmit={this.onHandleSubmit}>
                <div className="input-field">
                  <input
                    id="oldPassword"
                    type="password"
                    onChange={this.onHandleChange}
                    value={this.state.oldPassword}
                  />
                  <label htmlFor="oldPassword" className="active">
                    Current Password
                  </label>
                  {errors.oldPassword && (
                    <span
                      className="helper-text red-text "
                      data-error="wrong"
                      data-success="right"
                    >
                      {errors.oldPassword}
                    </span>
                  )}
                </div>
                <div className="input-field">
                  <input
                    id="newPassword"
                    type="password"
                    onChange={this.onHandleChange}
                    value={this.state.newPassword}
                  />
                  <label htmlFor="newPassword" className="active">
                    New Password
                  </label>
                  {errors.newPassword && (
                    <span
                      className="helper-text red-text "
                      data-error="wrong"
                      data-success="right"
                    >
                      {errors.newPassword}
                    </span>
                  )}
                </div>

                {errors.general && (
                  <>
                    <span className="red-text" style={{ marginTop: 5 }}>
                      {errors.general}
                    </span>
                    <br />
                  </>
                )}

                <button
                  disabled={loading}
                  className="btn grey darken-1 z-index-0"
                >
                  Update
                </button>
                <div className="container red-text center" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  UI: state.UI
});

const mapDispatch = {
  updatePassword,
  clearErrors
};
export default connect(
  mapStateToProps,
  mapDispatch
)(PaswordProfile);
