import React, { Component } from "react";
import dayjs from "dayjs";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EditDetails from "./EditDetails";
import ProfileSkeleton2 from "../../util/ProfileSkeleton2";
import { uploadImage } from "../../redux/actions/userAction";
import MyButton from "../../util/MyButton";

class AuthenticatedProfile extends Component {
  handleImageChange = event => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  render() {
    const {
      user: {
        credentials: { handle, imageUrl, createdAt, bio, website, location },
        loading,
        authenticated
      }
    } = this.props;
    const profileMarkup =
      !loading && authenticated ? (
        <React.Fragment>
          <div className="section">
            <div className="card card medium z-depth-0">
              <div className="card-content">
                <div className="profile">
                  <div className="image-wrapper">
                    <img
                      className="responsive-img circle profile-image"
                      src={imageUrl}
                      alt="profile-img"
                    />

                    <React.Fragment>
                      <input
                        type="file"
                        id="imageInput"
                        hidden
                        onChange={this.handleImageChange}
                      />
                      <MyButton
                        onClick={this.handleEditPicture}
                        btnClassName="waves-effect waves-teal btn-flat button"
                        tip="edit picture"
                      >
                        <i className="tiny material-icons">camera_alt</i>
                      </MyButton>
                    </React.Fragment>
                  </div>
                  <hr />
                  <div className="profile-details">
                    <Link to={`/users/${handle}`}>@{handle}</Link>
                    <hr />
                    {bio && (
                      <h6>
                        Bio:
                        <span className="grey-text">{bio}</span>
                      </h6>
                    )}
                    <hr />
                    {location && (
                      <React.Fragment>
                        <h6>
                          Location:
                          <span className="grey-text">{location}</span>
                        </h6>
                        <hr />
                      </React.Fragment>
                    )}
                    {website && (
                      <React.Fragment>
                        <h6>
                          Website:
                          <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {website}
                          </a>
                        </h6>

                        <hr />
                      </React.Fragment>
                    )}

                    <React.Fragment>
                      <h6>
                        Member Sinced:
                        <span className="grey-text">
                          {dayjs(createdAt).format("MMM YYYY")}
                        </span>
                      </h6>
                    </React.Fragment>
                  </div>
                  <EditDetails />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <ProfileSkeleton2 />
      );
    return profileMarkup;
  }
}
const mapStateToProps = state => ({
  user: state.user
});

const mapDispatch = {
  uploadImage
};

export default connect(
  mapStateToProps,
  mapDispatch
)(AuthenticatedProfile);
