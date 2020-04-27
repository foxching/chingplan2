import React, { Component } from "react";
import { connect } from "react-redux";
import { postProject } from "../../redux/actions/dataAction";
import { clearErrors } from "../../redux/actions/userAction";
class CreateProject extends Component {
  state = {
    title: "",
    content: "",
    errors: {}
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ title: "", content: "", errors: {} });
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  onHandleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const projectData = {
      title: this.state.title,
      content: this.state.content
    };
    this.props.postProject(projectData, this.props.history);
  };

  render() {
    const { loading } = this.props.UI;
    const { errors } = this.state;
    return (
      <div className="container">
        <form
          className="white"
          style={{ padding: "20px" }}
          onSubmit={this.onHandleSubmit}
        >
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <input id="title" type="text" onChange={this.onHandleChange} />
            <label htmlFor="title">Title</label>
            {errors.title && (
              <span
                className="helper-text red-text "
                data-error="wrong"
                data-success="right"
              >
                {errors.title}
              </span>
            )}
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.onHandleChange}
            />
            <label htmlFor="content">Content</label>
            {errors.content && (
              <span
                className="helper-text red-text "
                data-error="wrong"
                data-success="right"
              >
                {errors.content}
              </span>
            )}
          </div>
          <button className="btn pink lighten-1 z-index-0" disabled={loading}>
            Create
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  UI: state.UI
});

const mapDispatch = {
  postProject,
  clearErrors
};

export default connect(
  mapStateToProps,
  mapDispatch
)(CreateProject);
