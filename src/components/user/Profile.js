import React, { Component } from "react";
import { Link } from "react-router-dom";
import NoImg from "../../images/no-img.png";
import EditDetails from "./EditDetails";

class Profile extends Component {
  handleImageChange = event => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    //this.props.uploadImage(formData);
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  render() {
    return (
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
                <input
                  type="file"
                  id="imageInput"
                  hidden
                  onChange={this.handleImageChange}
                />
                <button
                  onClick={this.handleEditPicture}
                  className="waves-effect waves-teal btn-flat button"
                >
                  <i className="tiny material-icons">edit</i>
                </button>
              </div>
              <hr className="line-separator" />
              <div className="profile-details">
                <Link>@rechie</Link>
                <hr className="line-separator" />
                <h6>Im Cute</h6>
                <hr className="line-separator" />
                <React.Fragment>
                  <i className="tiny material-icons">location_on</i>
                  <span>Philippines</span>
                  <hr className="line-separator" />
                </React.Fragment>
                <React.Fragment>
                  <i className="tiny material-icons">insert_link</i>
                  <a href="!#" target="_blank" rel="noopener noreferrer">
                    http://www.google.com
                  </a>
                  <hr className="line-separator" />
                </React.Fragment>
                <React.Fragment>
                  <i className="tiny material-icons">today</i>
                  <span>Joined April 15, 2020</span>
                </React.Fragment>
              </div>
              <EditDetails />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
