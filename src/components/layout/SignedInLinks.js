import React from "react";
import { NavLink } from "react-router-dom";
import SignedInDropLinks from "./SignedInDropLinks.js";

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
        <SignedInDropLinks
          btnClassName="btn btn-floating white lighten-1"
          handle={props.handle}
        >
          <img
            className="responsive-img circle profile-image"
            src={props.imageUrl}
            alt="profile-img"
          />
        </SignedInDropLinks>
      </li>
    </ul>
  );
};

export default SignedInLinks;
