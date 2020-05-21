import React from "react";
import { Helmet } from "react-helmet";
//import dayjs from "dayjs";
import { Link } from "react-router-dom";
import PostCount from "./PostCount";
import FollowingCount from "./FollowingCount";
import FollowerCount from "./FollowerCount";

const StaticProfile = props => {
  const { handle, imageUrl, bio, website, location } = props.profile;
  const { loading } = props;
  return (
    <React.Fragment>
      <Helmet>
        <title>@{handle}</title>
        <meta name="description" content="User Projects" />
      </Helmet>
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            {!loading && (
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
                  <Link
                    to={`/users/${handle}`}
                    className="flow-text black-text"
                  >
                    @{handle}
                  </Link>
                  <hr />
                  <div>
                    <PostCount />
                    <FollowerCount />
                    <FollowingCount />
                    <hr />
                    <hr />
                  </div>
                  <span>"{bio}"</span>
                  <hr />
                  <hr />
                  <div>
                    <a href={website} target="_blank" rel="noopener noreferrer">
                      {website}
                    </a>
                    <hr />
                  </div>
                  <div>
                    <span>{location}</span>
                    <hr />
                  </div>
                  <button className="btn btn-small grey darken-1 z-index-0">
                    Follow
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StaticProfile;
