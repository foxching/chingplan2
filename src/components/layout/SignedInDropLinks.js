import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/userAction";

const SignedInDropLinks = props => {
  //redux actions
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutUser());
  //dropdown ref
  const drop1 = useRef();

  useEffect(() => {
    const options = {
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
    M.Dropdown.init(drop1.current, options);
  }, []);

  //method for logout
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <button
        ref={drop1}
        className={`dropdown-trigger btn waves-effect ${props.btnClassName}`}
        data-target="dropdown1"
      >
        {props.children}
      </button>

      <ul id="dropdown1" className="dropdown-content">
        <li>
          <Link to="/settings" className="black-text">
            Settings
          </Link>
        </li>
        <li>
          <Link to={`/users/${props.handle}`} className="black-text">
            My Plans
          </Link>
        </li>
        <li className="divider" />
        <li>
          <Link to="/signin" onClick={handleLogout} className="black-text">
            Signout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SignedInDropLinks;
