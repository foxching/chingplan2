import React from "react";
import NoImg from "../images/no-img.png";

const ProfileSkeleton = () => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="profile">
            <div className="image-wrapper">
              <img
                className="responsive-img circle profile-image-two"
                src={NoImg}
                alt="profile-img"
              />
            </div>
            <hr />
            <div className="profile-details container">
              <p className="handle-skeleton" />
              <hr />
              <div className="bio-skeleton" />
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
