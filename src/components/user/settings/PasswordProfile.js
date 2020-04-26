import React from "react";

const PaswordProfile = () => {
  return (
    <div className="section">
      <div className="card card medium z-depth-0">
        <div className="card-content">
          <form>
            <h5 className="grey-text text-darken-3">Change Password</h5>
            <div className="input-field">
              <input id="email" type="password" />
              <label htmlFor="email" className="active">
                Current Password
              </label>
              <span
                className="helper-text red-text "
                data-error="wrong"
                data-success="right"
              />
            </div>
            <div className="input-field">
              <input id="password" type="password" />
              <label htmlFor="password" className="active">
                New Password
              </label>
              <span
                className="helper-text red-text "
                data-error="wrong"
                data-success="right"
              />
            </div>

            <span className="red-text" style={{ marginTop: 5 }} />

            <button className="btn pink lighten-1 z-index-0">Update</button>
            <div className="container red-text center" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaswordProfile;
