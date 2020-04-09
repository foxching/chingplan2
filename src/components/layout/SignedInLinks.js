import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/actions/userAction";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/signin" onClick={props.logoutUser}>
          Logout
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          RL
        </NavLink>
      </li>
    </ul>
  );
};
const mapDispatch = {
  logoutUser
};
export default connect(
  null,
  mapDispatch
)(SignedInLinks);
