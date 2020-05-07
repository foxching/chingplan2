import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import EditProject from "../../components/projects/EditProject";
import DeleteProject from "./DeleteProject";
import ProjectInfo from "./ProjectInfo";

const ProjectOption = props => {
  const [open, setOpen] = useState(false);
  const dropdown1 = useRef();

  const user = useSelector(state => state.user);

  const handleOpenDropDown = () => {
    setOpen(true);
  };

  useEffect(() => {
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
    M.Dropdown.init(dropdown1.current, options1);
  }, []);

  const { projectId, project } = props;
  return (
    <React.Fragment>
      <div className="expand-button">
        <a
          ref={dropdown1}
          className=" dropdown-trigger btn-flat "
          href="!#"
          data-target={`${projectId}`}
          onClick={handleOpenDropDown}
        >
          <i className="material-icons">more_horiz</i>
        </a>

        <ul id={`${projectId}`} className="dropdown-content">
          {user.authenticated && project.handle === user.credentials.handle ? (
            <React.Fragment>
              <li>
                <button
                  className="waves-effect waves-light btn-flat modal-trigger"
                  data-target={`modal${projectId}`}
                >
                  <i className="material-icons ">edit</i>
                  <span>Edit</span>
                </button>
              </li>
              <li>
                <button
                  className="waves-effect waves-light btn-flat modal-trigger"
                  data-target={`modal2${projectId}`}
                >
                  <i className="material-icons ">delete</i>
                  <span>Delete</span>
                </button>
              </li>
            </React.Fragment>
          ) : (
            <li>
              <button
                className="waves-effect waves-light btn-flat modal-trigger"
                data-target={`modal3${projectId}`}
              >
                <i className="material-icons ">info</i>
                <span>Info</span>
              </button>
            </li>
          )}
        </ul>
      </div>
      {open && (
        <React.Fragment>
          {" "}
          <EditProject id={`modal${projectId}`} project={project} />
          <DeleteProject id={`modal2${projectId}`} />
          <ProjectInfo id={`modal3${projectId}`} project={project} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ProjectOption;
