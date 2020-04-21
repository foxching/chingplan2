import React, { Component } from "react";
//import { Link } from "react-router-dom";

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
            <a href="#!" className="collection-item ">
              Basics
            </a>
          </li>
          <li>
            <a href="#!" className="collection-item ">
              My Photo
            </a>
          </li>
        </ul>
        <ul className="collection with-header">
          <li className="collection-header grey darken-2 white-text">
            <i className="material-icons tiny">settings</i>
            <span>Account</span>
          </li>
          <li>
            <a href="#!" className="collection-item ">
              Security
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SettingsNav;
