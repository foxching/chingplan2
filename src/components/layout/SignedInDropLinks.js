import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import { logoutUser } from "../../redux/actions/userAction";

class SignedInDropLinks extends Component {
  componentDidMount() {
    const options = {
      // hover: true,
      // closeOnClick: true,
      alignment: "left",
      onOpenStart: () => {
        console.log("onOpenStart");
      },
      onOpenEnd: () => {
        console.log("onOpenEnd");
      },
      onCloseStart: () => {
        console.log("onCloseStart");
      },
      onCloseEnd: () => {
        console.log("onCloseEnd");
      },
      inDuration: 300,
      outDuration: 200,
      coverTrigger: true
    };
    M.Dropdown.init(this.Dropdown, options);
  }

  render() {
    return (
      <div>
        <button
          ref={Dropdown => {
            this.Dropdown = Dropdown;
          }}
          className={`dropdown-trigger btn waves-effect ${
            this.props.btnClassName
          }`}
          data-target="dropdown1"
        >
          {this.props.children}
        </button>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <Link to="/settings" className="black-text">
              Settings
            </Link>
          </li>
          <li>
            <Link to={`/users/${this.props.handle}`} className="black-text">
              My Plans
            </Link>
          </li>
          <li className="divider" />
          <li>
            <Link
              to="/signin"
              onClick={this.props.logoutUser}
              className="black-text"
            >
              Signout
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatch = {
  logoutUser
};

export default connect(
  null,
  mapDispatch
)(SignedInDropLinks);
