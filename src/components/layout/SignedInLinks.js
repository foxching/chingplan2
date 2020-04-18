import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../../util/Dropdown";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/create">Create</NavLink>
      </li>
      <li>
        <Dropdown btnClassName="btn btn-floating pink lighten-1">
          <img
            className="responsive-img circle profile-image"
            src={props.imageUrl}
            alt="profile-img"
          />
        </Dropdown>
      </li>
    </ul>
  );
};

export default SignedInLinks;
