import React, { useState, useEffect, useRef } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import { useDispatch } from "react-redux";
import { editProject } from "../../redux/actions/dataAction";

const EditProject = props => {
  const [value, setValue] = useState({ title: "", content: "" });

  const modal1 = useRef();

  const dispatch = useDispatch();
  const editProjectItem = (id, userInfo) => dispatch(editProject(id, userInfo));

  const mapPropstoState = () => {
    setValue({
      title: props.project.title ? props.project.title : "",
      content: props.project.content ? props.project.content : ""
    });
  };

  const handleChange = e => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = props.id.split("modal")[1];
    const userDetails = {
      title: value.title,
      content: value.content
    };
    editProjectItem(id, userDetails);
  };

  useEffect(() => {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
        mapPropstoState();
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
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(modal1.current, options);
  }, []);

  return (
    <div>
      <div ref={modal1} id={props.id} className="modal">
        <h5 className="modal-close close-btn">&#10005;</h5>
        <div className="modal-content center">
          <h4>Edit Project</h4>
          <form className="modal-form">
            <div className="input-field">
              <input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                placeholder="Title"
                value={value.title}
              />
              <label className="active" htmlFor="title">
                Title
              </label>
            </div>
            <div className="input-field">
              <textarea
                id="content"
                name="content"
                className="materialize-textarea"
                onChange={handleChange}
                value={value.content}
                data-length={200}
                placeholder="Content"
              />
              <label className="active" htmlFor="content">
                Content
              </label>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            onClick={handleSubmit}
            className="modal-close waves-effect waves-green btn-flat"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
