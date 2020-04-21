import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { editUserDetails } from "../../redux/actions/userAction";
import MyButton from "../../util/MyButton";

class EditProfile extends Component {
  state = {
    bio: "",
    website: "",
    location: ""
  };

  mapUserDetailsToState = credentials => {
    this.setState({
      bio: credentials.bio ? credentials.bio : "",
      website: credentials.website ? credentials.website : "",
      location: credentials.location ? credentials.location : ""
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
        this.mapUserDetailsToState(this.props.credentials);
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  }

  handleSubmit = e => {
    e.preventDefault();
    const userDetails = {
      bio: this.state.bio,
      website: this.state.website,
      location: this.state.location
    };
    this.props.editUserDetails(userDetails);
  };
  render() {
    return (
      <React.Fragment>
        <div className="center-align">
          <MyButton
            tip="edit details"
            btnClassName="waves-light waves-effect btn modal-trigger btn-flat button  "
            target="modal1"
          >
            <i className="tiny material-icons">edit</i>
          </MyButton>
        </div>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <h5 className="modal-close close-btn">&#10005;</h5>
          <div className="modal-content center">
            <h4>Edit Details</h4>
            <form className="modal-form">
              <div className="input-field">
                <textarea
                  id="bio"
                  name="bio"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.bio}
                  placeholder="Bio"
                />
                <label className="active" htmlFor="bio">
                  Bio
                </label>
              </div>

              <div className="input-field">
                <input
                  type="text"
                  name="website"
                  id="website"
                  onChange={this.handleChange}
                  placeholder="Website"
                  value={this.state.website}
                />
                <label className="active" htmlFor="website">
                  Website
                </label>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  id="location"
                  name="location"
                  onChange={this.handleChange}
                  placeholder="Location"
                  value={this.state.location}
                />
                <label className="active" htmlFor="location">
                  Location
                </label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              href="#!"
              onClick={this.handleSubmit}
              className="modal-close waves-effect waves-green btn-flat"
            >
              Saved
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  credentials: state.user.credentials
});
const mapDispatch = {
  editUserDetails
};
export default connect(
  mapStateToProps,
  mapDispatch
)(EditProfile);
