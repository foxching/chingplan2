import React, { useState, useEffect, useRef } from "react";

import { toastr } from "react-redux-toastr";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
//redux
import { useDispatch, useSelector } from "react-redux";
import { editUserDetails } from "../../redux/actions/userAction";
//components
import MyButton from "../../util/MyButton";

const EditProfile = () => {
  const [value, setValue] = useState({ bio: "", location: "", website: "" });

  const modal1 = useRef();
  const credentials = useSelector(state => state.user.credentials);

  const dispatch = useDispatch();
  const edit = creds => dispatch(editUserDetails(creds));

  const mapUserDetailsToState = credentials => {
    setValue({
      bio: credentials.bio ? credentials.bio : "",
      location: credentials.location ? credentials.location : "",
      website: credentials.website ? credentials.website : ""
    });
  };

  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
        mapUserDetailsToState(credentials);
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
    M.Modal.init(modal1.current, options);
    mapUserDetailsToState(credentials);
  }, [credentials]);

  const handleSubmit = async e => {
    e.preventDefault();
    const userDetails = {
      bio: value.bio,
      website: value.website,
      location: value.location
    };

    try {
      await edit(userDetails);
      toastr.success("Success", "Details has been updated!");
    } catch (err) {
      toastr.error("Error", "There is something wrong!");
    }
  };

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

      <div ref={modal1} id="modal1" className="modal">
        <h5 className="modal-close close-btn">&#10005;</h5>
        <div className="modal-content center">
          <h4>Edit Details</h4>
          <form className="modal-form">
            <div className="input-field">
              <textarea
                id="bio"
                name="bio"
                className="materialize-textarea"
                onChange={handleChange}
                value={value.bio}
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
                onChange={handleChange}
                placeholder="Website"
                value={value.website}
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
                onChange={handleChange}
                placeholder="Location"
                value={value.location}
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
            onClick={handleSubmit}
            className="modal-close waves-effect waves-green btn-flat"
          >
            Saved
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditProfile;
