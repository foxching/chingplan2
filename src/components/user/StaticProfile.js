import React from "react";
import { Helmet } from "react-helmet";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const StaticProfile = props => {
  const { handle, imageUrl, createdAt, bio, website, location } = props.profile;

  return (
    <React.Fragment>
      <Helmet>
        <title>@{handle}</title>
        <meta name="description" content="User Projects" />
      </Helmet>
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="profile">
              <div className="image-wrapper">
                <img
                  className="responsive-img circle profile-image-two"
                  src={imageUrl}
                  alt="profile-img"
                />
              </div>
              <hr />
              <div className="profile-details">
                <Link to={`/users/${handle}`} className="flow-text black-text">
                  @{handle}
                </Link>
                <hr />
                {location && (
                  <React.Fragment>
                    <b>3</b> {""}
                    <span className="italic">posts </span>
                    <b>13</b> {""}
                    <span>followers </span>
                    <b>23</b> {""}
                    <span>following </span>
                    <hr />
                    <hr />
                  </React.Fragment>
                )}
                {bio && <span>"{bio}"</span>}
                <hr />
                <hr />
                {website && (
                  <React.Fragment>
                    <a href={website} target="_blank" rel="noopener noreferrer">
                      {website}
                    </a>
                    <hr />
                  </React.Fragment>
                )}
                {location && (
                  <React.Fragment>
                    <span>{location}</span>
                    <hr />
                  </React.Fragment>
                )}
                <button className="btn btn-small grey darken-1 z-index-0">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StaticProfile;
