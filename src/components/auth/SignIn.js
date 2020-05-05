import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
//redux staff
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearErrors } from "../../redux/actions/userAction";

const Signin = props => {
  //local statte
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  //redux state
  const loading = useSelector(state => state.UI.loading);
  const err = useSelector(state => state.UI.errors);
  //actions
  const dispatch = useDispatch();
  const login = (data, history) => dispatch(loginUser(data, history));

  //METHODS//
  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    };
    login(userData, props.history);
  };

  //side effect
  useEffect(() => {
    setErrors(err);
  }, [err]);

  useEffect(() => {
    const clearUIErrors = () => dispatch(clearErrors());
    return () => {
      clearUIErrors();
    };
  }, [dispatch]);

  return (
    <div className="container">
      <Helmet>
        <title>SignIn</title>
        <meta name="description" content="Login" />
      </Helmet>
      <form
        className="white"
        style={{ padding: "20px" }}
        onSubmit={onHandleSubmit}
      >
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <input
            id="email"
            type="text"
            onChange={handleChangeEmail}
            vaue={email}
          />
          <label htmlFor="email">Email</label>
          {errors !== null && errors.email && (
            <span
              className="helper-text red-text "
              data-error="wrong"
              data-success="right"
            >
              {errors.email}
            </span>
          )}
        </div>
        <div className="input-field">
          <input
            id="password"
            type="password"
            onChange={handleChangePassword}
            vaue={password}
          />
          <label htmlFor="password">Password</label>
          {errors !== null && errors.password && (
            <span
              className="helper-text red-text "
              data-error="wrong"
              data-success="right"
            >
              {errors.password}
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
          Login
        </button>
        <div className="container red-text center" />
      </form>
    </div>
  );
};

export default Signin;
