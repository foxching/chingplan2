import React, { Component } from "react";
import AuthenticatedProfile from "../AuthenticatedProfile";
import SettingsNav from "./SettingsNav";

class Settings extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m8 ">
            <AuthenticatedProfile />
          </div>
          <div className="col s12 m3 offset m-1 ">
            <SettingsNav />
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
