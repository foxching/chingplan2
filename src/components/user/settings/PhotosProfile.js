import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import NoImg from "../../../images/no-img.png";
import MyButton from "../../../util/MyButton";
import { uploadImage } from "../../../redux/actions/userAction";

class PhotosProfile extends Component {
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
        credentials: { imageUrl },
        loading
      }
    } = this.props;
    return (
      <div className="section">
        <Helmet>
          <title>Settings - Photos</title>
          <meta name="description" content="Change Profile Picture" />
        </Helmet>
        <div className="card card medium z-depth-0">
          <div className="card-content">
            <div className="image-wrapper">
              <img
                className="responsive-img circle profile-image-one"
                src={loading ? NoImg : imageUrl}
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
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatch = {
  uploadImage
};
export default connect(
  null,
  mapDispatch
)(PhotosProfile);
