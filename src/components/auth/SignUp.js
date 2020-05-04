import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

// Redux stuff
import { useDispatch, useSelector } from "react-redux";
import { signupUser, clearErrors } from "../../redux/actions/userAction";

const Signup = props => {
  //Local state//
  const [value, setValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    handle: ""
  });
  const [errors, setErrors] = useState({});

  //redux state
  const loading = useSelector(state => state.UI.loading);
  const err = useSelector(state => state.UI.errors);
  //redux actions
  const dispatch = useDispatch();
  const signup = (data, history) => dispatch(signupUser(data, history));

  //METHODS//
  const onChangeHandle = e => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const userData = {
      email: value.email,
      password: value.password,
      confirmPassword: value.confirmPassword,
      handle: value.handle
    };
    signup(userData, props.history);
  };

  //USE EFFECT//
  useEffect(() => {
    setErrors(err);
  }, [errors, err]);

  //clear errors
  useEffect(() => {
    const clearUIErrors = () => dispatch(clearErrors());
    return () => {
      clearUIErrors();
    };
  }, [dispatch]);

  return (
    <div className="container">
      <Helmet>
        <title>Signup</title>
        <meta name="description" content="Register" />
      </Helmet>
      <form
        className="white"
        onSubmit={handleSubmit}
        style={{ padding: "20px" }}
      >
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <input
            id="email"
            type="text"
            value={value.email}
            onChange={onChangeHandle}
          />
          <label htmlFor="email">Email</label>
          {errors !== null && errors.email && (
            <span
              className="helper-text red-text "
              data-error="wrong"
              data-success="right"
              style={{ marginBottom: 0 }}
            >
              {errors.email}
            </span>
          )}
        </div>
        <div className="input-field">
          <input
            id="password"
            type="password"
            value={value.password}
            onChange={onChangeHandle}
          />
          <label htmlFor="password">Password</label>
          {errors !== null && errors.password && (
            <span
              className="helper-text red-text"
              data-error="wrong"
              data-success="right"
              style={{ marginBottom: 0 }}
            >
              {errors.password}
            </span>
          )}
        </div>
        <div className="input-field">
          <input
            id="confirmPassword"
            type="password"
            onChange={onChangeHandle}
            value={value.confirmPassword}
          />
          <label htmlFor="firstName">Confirm Password</label>
          {errors !== null && errors.confirmPassword && (
            <span
              className="helper-text red-text"
              data-error="wrong"
              data-success="right"
            >
              {errors.confirmPassword && errors.confirmPassword}
            </span>
          )}
        </div>
        <div className="input-field">
          <input
            id="handle"
            type="text"
            value={value.handle}
            onChange={onChangeHandle}
          />
          <label htmlFor="lastName">Username</label>
          {errors !== null && errors.handle && (
            <span
              className="helper-text red-text"
              data-error="wrong"
              data-success="right"
            >
              {errors.handle && errors.handle}
            </span>
          )}
        </div>

        {errors !== null && errors.general && (
          <>
            <span className="red-text" style={{ marginTop: 5 }}>
              {errors.general}
            </span>
            <br />
          </>
        )}

        <button className="btn pink lighten-1 z-index-0" disabled={loading}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
