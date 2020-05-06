import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { deleteProject } from "../../redux/actions/dataAction";

const DeleteProject = props => {
  const modal1 = useRef();
  const dispatch = useDispatch();
  const deleteProjectItem = id => dispatch(deleteProject(id));

  useEffect(() => {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
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

  const handleDeleteProject = () => {
    const id = props.id.split("modal2")[1];
    deleteProjectItem(id);
  };

  return (
    <div>
      <div ref={modal1} id={props.id} className="modal">
        <div className="modal-content">
          <h4>Delete this Project?</h4>
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-red btn-flat">
            Disagree
          </button>
          <button
            onClick={handleDeleteProject}
            className="modal-close waves-effect waves-green btn-flat"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProject;
