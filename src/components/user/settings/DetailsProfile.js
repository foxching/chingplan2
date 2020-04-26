import React, { Component } from "react";
import EditProfile from "../EditProfile";

class AuthenticatedProfile extends Component {
  render() {
    const {
      user: {
        credentials: { bio, website, location }
      }
    } = this.props;
    return (
      <div className="section">
        <div className="card card medium z-depth-0">
          <div className="card-content">
            <div className="profile">
              <p className="black-text flow-text">Edit Details</p>
              <form>
                <div className="input-field">
                  <textarea
                    disabled
                    value={bio}
                    className="materialize-textarea"
                  />
                  <label htmlFor="bio" className="active">
                    Bio
                  </label>
                </div>
                <div className="input-field">
                  <input type="text" disabled value={location} />
                  <label htmlFor="location" className="active">
                    Location
                  </label>
                </div>
                <div className="input-field">
                  <input type="text" disabled value={website} />
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
  }
}

export default AuthenticatedProfile;
