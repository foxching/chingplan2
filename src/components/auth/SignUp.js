import React, { Component } from "react";

// Redux stuff
import { connect } from "react-redux";
import { signupUser } from "../../redux/actions/userAction";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    handle: "",
    errors: {}
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  onHandleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle
    };

    this.props.signupUser(newUserData, this.props.history);
  };
  render() {
    const { errors } = this.state;
    const { loading } = this.props.UI;
    return (
      <div className="container">
        <form
          className="white"
          onSubmit={this.onHandleSubmit}
          style={{ padding: "20px" }}
        >
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <input id="email" type="text" onChange={this.onHandleChange} />
            <label htmlFor="email">Email</label>
            {errors.email && (
              <span
                className="helper-text red-text "
                data-error="wrong"
                data-success="right"
                style={{ marginBottom: 0 }}
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
                className="helper-text red-text"
                data-error="wrong"
                data-success="right"
                style={{ marginBottom: 0 }}
              >
                {errors.password}
              </span>
            )}
          </div>
          <div className="input-field">
            <input
              id="confirmPassword"
              type="password"
              onChange={this.onHandleChange}
            />
            <label htmlFor="firstName">Confirm Password</label>
            {errors.confirmPassword && (
              <span
                className="helper-text red-text"
                data-error="wrong"
                data-success="right"
              >
                {errors.confirmPassword && errors.confirmPassword}
              </span>
            )}
          </div>
          <div className="input-field">
            <input id="handle" type="text" onChange={this.onHandleChange} />
            <label htmlFor="lastName">Username</label>
            {errors.handle && (
              <span
                className="helper-text red-text"
                data-error="wrong"
                data-success="right"
              >
                {errors.handle && errors.handle}
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
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { signupUser }
)(SignUp);
