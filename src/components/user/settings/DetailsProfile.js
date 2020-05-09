import React from "react";
import { Helmet } from "react-helmet";
import EditProfile from "../EditProfile";

const DetailsProfile = props => {
  const {
    user: {
      credentials: { bio, website, location }
    }
  } = props;

  return (
    <div className="section">
      <Helmet>
        <title>Settings - Basic</title>
        <meta name="description" content="Change Profile Infos" />
      </Helmet>
      <div className="card card medium z-depth-0">
        <div className="card-content">
          <div className="profile">
            <p className="black-text flow-text">Edit Details</p>
            <form>
              <div className="input-field">
                <textarea
                  disabled
                  value={bio ? bio : ""}
                  className="materialize-textarea"
                />
                <label htmlFor="bio" className="active">
                  Bio
                </label>
              </div>
              <div className="input-field">
                <input type="text" disabled value={location ? location : ""} />
                <label htmlFor="location" className="active">
                  Location
                </label>
              </div>
              <div className="input-field">
                <input type="text" disabled value={website ? website : ""} />
                <label htmlFor="website" className="active">
                  Website
                </label>
              </div>
            </form>
            <EditProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProfile;
