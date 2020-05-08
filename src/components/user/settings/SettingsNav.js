import React from "react";
import { NavLink } from "react-router-dom";

const SettingsNav = () => {
  return (
    <div className="section">
      <ul className="collection with-header">
        <li className="collection-header grey darken-2 white-text">
          <i className="material-icons tiny">person</i>
          <span>Profile</span>
        </li>
        <li>
          <NavLink to="/settings/basic" className="collection-item grey-text">
            Basic
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings/photos" className="collection-item grey-text">
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
          <NavLink
            to="/settings/password"
            className="collection-item grey-text"
          >
            Password
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SettingsNav;
