import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = props => {
  const { authenticated } = props.user;
  const links = authenticated ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          ChingPlan
        </Link>
        {links}
      </div>
    </nav>
  );
};
const mapStateToProps = state => ({
  user: state.user
});
export default connect(
  mapStateToProps,
  null
)(Navbar);
