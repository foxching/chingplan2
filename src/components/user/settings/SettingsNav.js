import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SettingsNav extends Component {
  render() {
    return (
      <div className="section">
        <ul className="collection with-header">
          <li className="collection-header grey darken-2 white-text">
            <i className="material-icons tiny">person</i>
            <span>Profile</span>
          </li>
          <li>
            <NavLink to="/settings/basic" className="collection-item">
              Basic
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings/photos" className="collection-item">
              Photos
            </NavLink>
          </li>
        </ul>
        <ul className="collection with-header">
          <li className="collection-header grey darken-2 white-text">
            <i className="material-icons tiny">settings</i>
            <span>Account</span>
          </li>
          <li>
            <NavLink to="/settings/password" className="collection-item">
              Password
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default SettingsNav;
