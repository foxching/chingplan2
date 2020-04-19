import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import { logoutUser } from "../../redux/actions/userAction";

class ProjectOption extends Component {
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
      <div className={this.props.btnClassName}>
        <button
          ref={Dropdown => {
            this.Dropdown = Dropdown;
          }}
          className={`dropdown-trigger waves-effect waves-teal btn-flat `}
          data-target="dropdown2"
        >
          {this.props.children}
        </button>

        <ul id="dropdown2" className="dropdown-content">
          <li>
            <a href="#!">
              <span>Edit</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <span>Delete</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <span>Info</span>
            </a>
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
)(ProjectOption);
