import React, { Component } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import NoImg from "../../images/no-img.png";

class PublicProfile extends Component {
  render() {
    const { handle, createdAt, bio, website, location } = this.props.profile;

    return (
      <React.Fragment>
        <div className="section">
          <div className="card z-depth-0">
            <div className="card-content">
              <div className="profile">
                <div className="image-wrapper">
                  <img
                    className="responsive-img circle profile-image"
                    src={NoImg}
                    alt="profile-img"
                  />
                </div>
                <hr />
                <div className="profile-details">
                  <Link to={`/users/${handle}`}>@{handle}</Link>
                  <hr />
                  {bio && <h6>{bio}</h6>}
                  <hr />
                  {location && (
                    <React.Fragment>
                      <i className="tiny material-icons">location_on</i>
                      <span>{location}</span>
                      <hr />
                    </React.Fragment>
                  )}
                  {website && (
                    <React.Fragment>
                      <i className="tiny material-icons">insert_link</i>
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {website}
                      </a>
                      <hr />
                    </React.Fragment>
                  )}

                  <React.Fragment>
                    <i className="tiny material-icons">today</i>
                    <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PublicProfile;
