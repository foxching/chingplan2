import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { useDispatch, useSelector } from "react-redux";
import { postProject } from "../../redux/actions/dataAction";
import { clearErrors } from "../../redux/actions/userAction";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});

  //redux state
  const loading = useSelector(state => state.UI.loading);
  const err = useSelector(state => state.UI.errors);
  //redux actions
  const dispatch = useDispatch();
  const addProject = (data, history) => dispatch(postProject(data, history));

  //METHODS//
  const onHandleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const onHandleChangeContent = e => {
    setContent(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const projectData = {
      title,
      content
    };
    addProject(projectData, this.props.history);
  };

  //USE EFFECT//
  useEffect(() => {
    setErrors(err);
  }, [errors, err]);

  //clear errors
  useEffect(() => {
    const clearUIErrors = () => dispatch(clearErrors());
    return () => {
      clearUIErrors();
    };
  }, [dispatch]);

  return (
    <div className="container">
      <Helmet>
        <title>Create Project</title>
        <meta name="description" content="Create Project" />
      </Helmet>
      <form
        className="white"
        style={{ padding: "20px" }}
        onSubmit={onHandleSubmit}
      >
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <input
            id="title"
            type="text"
            value={title}
            onChange={onHandleChangeTitle}
          />
          <label htmlFor="title">Title</label>
          {errors !== null && errors.title && (
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
            value={content}
            className="materialize-textarea"
            onChange={onHandleChangeContent}
          />
          <label htmlFor="content">Content</label>
          {errors !== null && errors.content && (
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
};

export default CreateProject;
