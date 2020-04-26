import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { editProject } from "../../redux/actions/dataAction";

class EditProject extends Component {
  state = {
    title: "",
    content: ""
  };

  mapPropstoState = () => {
    this.setState({
      title: this.props.project.title ? this.props.project.title : "",
      content: this.props.project.content ? this.props.project.content : ""
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
        this.mapPropstoState();
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

  handleSubmit = e => {
    e.preventDefault();
    const id = this.props.id.split("modal")[1];
    const userDetails = {
      title: this.state.title,
      content: this.state.content
    };
    this.props.editProject(id, userDetails);
  };
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
          <h5 className="modal-close close-btn">&#10005;</h5>
          <div className="modal-content center">
            <h4>Edit Project</h4>
            <form className="modal-form">
              <div className="input-field">
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={this.handleChange}
                  placeholder="Title"
                  value={this.state.title}
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
                  onChange={this.handleChange}
                  value={this.state.content}
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
              onClick={this.handleSubmit}
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatch = {
  editProject
};
export default connect(
  null,
  mapDispatch
)(EditProject);
