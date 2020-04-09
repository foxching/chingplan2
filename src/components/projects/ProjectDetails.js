import React from "react";

const ProjectDetails = props => {
  if (true) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0 project-details">
          <div className="card-content">
            <span className="card-title">project title</span>
            <p>project.content</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by project.authorFirstName project.authorLastName</div>
            <div>03/28/2020</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading data....</p>
      </div>
    );
  }
};

export default ProjectDetails;
