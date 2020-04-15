import React, { Component } from "react";

class EditDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="center-align">
          <button
            onClick={this.handleEditPicture}
            className="waves-effect waves-teal btn-flat button "
          >
            <i className="tiny material-icons">edit</i>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default EditDetails;
