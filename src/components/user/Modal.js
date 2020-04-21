import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
  render() {
    return (
      <div>
        <Link to={`project/${this.props.projectId}`}>Project</Link>
      </div>
    );
  }
}

export default Modal;
