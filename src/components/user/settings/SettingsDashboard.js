import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Details from "./Details";
import Photos from "./Photos";
import Password from "./Password";
import SettingsNav from "./SettingsNav";

const Settings = () => {
  const user = useSelector(state => state.user);
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m8 ">
          <Switch>
            <Redirect exact from="/settings" to="/settings/basic" />
            <Route
              path="/settings/basic"
              render={() => <Details user={user} />}
            />
            <Route
              path="/settings/photos"
              render={() => <Photos user={user} />}
            />
            <Route path="/settings/password" render={() => <Password />} />
          </Switch>
        </div>
        <div className="col s12 m3 offset m-1 ">
          <SettingsNav />
        </div>
      </div>
    </div>
  );
};

export default Settings;
