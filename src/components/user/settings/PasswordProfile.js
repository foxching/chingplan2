import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../../redux/actions/userAction";
import { clearErrors } from "../../../redux/actions/userAction";

const PasswordProfile = () => {
  //local state
  const [value, setValue] = useState({ oldPassword: "", newPassword: "" });
  const [errors, setErrors] = useState({});

  //redux action and state
  const err = useSelector(state => state.UI.errors);
  const { loading } = useSelector(state => state.UI);
  const dispatch = useDispatch();

  const update = data => dispatch(updatePassword(data));

  const onHandleChange = e => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const passwordData = {
      oldPassword: value.oldPassword,
      newPassword: value.newPassword
    };
    update(passwordData);
  };

  //sett error
  useEffect(() => {
    setErrors(err);
  }, [errors, err]);

  //clear inputs if no errors
  useEffect(() => {
    if (!err && !loading) {
      setValue({ oldPassword: "", newPassword: "" });
      setErrors({});
    }
  }, [err, loading]);

  //clear error when unmount
  useEffect(() => {
    const clearUIErrors = () => dispatch(clearErrors());
    return () => {
      clearUIErrors();
    };
  }, [dispatch]);

  return (
    <div className="section">
      <Helmet>
        <title>Settings - Password</title>
        <meta name="description" content="Change Password" />
      </Helmet>
      <div className="card card medium z-depth-0">
        <div className="card-content">
          <div className="profile">
            <p className="black-text flow-text">Change Password</p>
            <form onSubmit={onHandleSubmit}>
              <div className="input-field">
                <input
                  id="oldPassword"
                  type="password"
                  onChange={onHandleChange}
                  value={value.oldPassword}
                />
                <label htmlFor="oldPassword" className="active">
                  Current Password
                </label>
                {errors !== null && errors.oldPassword && (
                  <span
                    className="helper-text red-text "
                    data-error="wrong"
                    data-success="right"
                  >
                    {errors.oldPassword}
                  </span>
                )}
              </div>
              <div className="input-field">
                <input
                  id="newPassword"
                  type="password"
                  onChange={onHandleChange}
                  value={value.newPassword}
                />
                <label htmlFor="newPassword" className="active">
                  New Password
                </label>
                {errors !== null && errors.newPassword && (
                  <span
                    className="helper-text red-text "
                    data-error="wrong"
                    data-success="right"
                  >
                    {errors.newPassword}
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

              <button
                disabled={loading}
                className="btn grey darken-1 z-index-0"
              >
                Update
              </button>
              <div className="container red-text center" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordProfile;
