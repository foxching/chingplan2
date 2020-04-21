import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class DeleteProject extends Component {
  componentDidMount() {
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
    M.Modal.init(this.Modal, options);
  }

  render() {
    const { id } = this.props;
    return (
      <div>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id={id}
          className="modal"
        >
          <div className="modal-content">
            <h4>Delete this Project?</h4>
          </div>
          <div className="modal-footer">
            <button className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </button>
            <button className="modal-close waves-effect waves-green btn-flat">
              Agree
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteProject;
