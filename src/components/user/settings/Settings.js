import React, { Component } from "react";
import AuthenticatedProfile from "../AuthenticatedProfile";

class Settings extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m2 offset-m1" />
          <div className="col s12 m6 ">
            <AuthenticatedProfile />
          </div>
          <div className="col s12 m2 offset-m1" />
        </div>
      </div>
    );
  }
}

export default Settings;
