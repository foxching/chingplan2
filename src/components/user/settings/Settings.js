import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthenticatedProfile from "./AuthenticatedProfile";
import PhotosProfile from "./PhotosProfile";
import PasswordProfile from "./PasswordProfile";
import SettingsNav from "./SettingsNav";

class Settings extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m8 ">
            <Switch>
              <Redirect exact from="/settings" to="/settings/basic" />
              <Route
                path="/settings/basic"
                render={() => <AuthenticatedProfile />}
              />
              <Route path="/settings/photos" render={() => <PhotosProfile />} />
              <Route
                path="/settings/password"
                render={() => <PasswordProfile />}
              />
            </Switch>
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
