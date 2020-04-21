import React, { Component } from "react";
//import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import EditProject from "../../components/projects/EditProject";
import DeleteProject from "./DeleteProject";
import ProjectInfo from "./ProjectInfo";

class ProjectOption extends Component {
  componentDidMount() {
    const options1 = {
      alignment: "left",
      onOpenStart: () => {
        console.log("onOpenStart Dropdown");
      },
      onOpenEnd: () => {
        console.log("onOpenEnd Dropdown");
      },
      onCloseStart: () => {
        console.log("onCloseStart Dropdown");
      },
      onCloseEnd: () => {
        console.log("onCloseEnd Dropdown");
      },
      inDuration: 300,
      outDuration: 200,
      coverTrigger: true
    };
    M.Dropdown.init(this.Dropdown, options1);
  }

  render() {
    const { projectId } = this.props;
    return (
      <React.Fragment>
        <div className="expand-button">
          <a
            ref={Dropdown => {
              this.Dropdown = Dropdown;
            }}
            className=" dropdown-trigger btn-flat "
            href="!#"
            data-target={`${projectId}`}
          >
            <i className="material-icons">more_horiz</i>
          </a>

          <ul id={`${projectId}`} className="dropdown-content">
            <button
              className="waves-effect waves-light btn-flat modal-trigger"
              data-target={`modal${projectId}`}
            >
              <i className="material-icons ">edit</i>
              <span>Edit</span>
            </button>
            <button
              className="waves-effect waves-light btn-flat modal-trigger"
              data-target={`modal2${projectId}`}
            >
              <i className="material-icons ">delete</i>
              <span>Delete</span>
            </button>
            <button
              className="waves-effect waves-light btn-flat modal-trigger"
              data-target={`modal3${projectId}`}
            >
              <i className="material-icons ">info</i>
              <span>Info</span>
            </button>
          </ul>
        </div>
        <EditProject id={`modal${projectId}`} />
        <DeleteProject id={`modal2${projectId}`} />
        <ProjectInfo id={`modal3${projectId}`} />
      </React.Fragment>
    );
  }
}

export default ProjectOption;
