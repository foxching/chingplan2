import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = props => {
  const {
    authenticated,
    credentials: { handle, imageUrl }
  } = props.user;
  const links = authenticated ? (
    <SignedInLinks imageUrl={imageUrl} handle={handle} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            ChingPlan
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = state => ({
  user: state.user
});
export default connect(
  mapStateToProps,
  null
)(Navbar);
