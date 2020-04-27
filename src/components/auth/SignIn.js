import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser, clearErrors } from "../../redux/actions/userAction";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };
  render() {
    const { errors } = this.state;
    const { loading } = this.props.UI;
    return (
      <div className="container">
        <form
          className="white"
          style={{ padding: "20px" }}
          onSubmit={this.onHandleSubmit}
        >
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <input id="email" type="text" onChange={this.onHandleChange} />
            <label htmlFor="email">Email</label>
            {errors.email && (
              <span
                className="helper-text red-text "
                data-error="wrong"
                data-success="right"
              >
                {errors.email}
              </span>
            )}
          </div>
          <div className="input-field">
            <input
              id="password"
              type="password"
              onChange={this.onHandleChange}
            />
            <label htmlFor="password">Password</label>
            {errors.password && (
              <span
                className="helper-text red-text "
                data-error="wrong"
                data-success="right"
              >
                {errors.password}
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

          <button className="btn pink lighten-1 z-index-0" disabled={loading}>
            Login
          </button>
          <div className="container red-text center" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser,
  clearErrors
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SignIn);
