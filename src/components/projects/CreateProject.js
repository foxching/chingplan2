import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  onHandleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.onHandleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <input
              id="title"
              type="text"
              onChange={this.onHandleChange}
              required
            />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.onHandleChange}
              required
            />
            <label htmlFor="content">Content</label>
          </div>
          <button className="btn pink lighten-1 z-index-0">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateProject;
