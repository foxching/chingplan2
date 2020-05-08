import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import NoImg from "../../../images/no-img.png";
import MyButton from "../../../util/MyButton";
import { uploadImage } from "../../../redux/actions/userAction";

const PhotosProfile = props => {
  const dispatch = useDispatch();
  const upload = imgData => dispatch(uploadImage(imgData));

  const handleImageChange = event => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    upload(formData);
  };

  const handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const {
    user: {
      credentials: { imageUrl },
      loading
    }
  } = props;
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
                onChange={handleImageChange}
              />
              <MyButton
                onClick={handleEditPicture}
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
};

export default PhotosProfile;
