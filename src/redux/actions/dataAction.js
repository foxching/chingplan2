import {
  SET_PROJECTS,
  SET_PROJECT,
  POST_PROJECT,
  LOADING_DATA,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI
} from "../types";
import axios from "axios";

// Get all screams
export const getProjects = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/projects")
    .then(res => {
      dispatch({
        type: SET_PROJECTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_PROJECTS,
        payload: []
      });
    });
};

export const getProject = projectId => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/project/${projectId}`)
    .then(res => {
      dispatch({
        type: SET_PROJECT,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch(err => console.log(err));
};

// Post a project

export const postProject = (newProject, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/project", newProject)
    .then(res => {
      dispatch({
        type: POST_PROJECT,
        payload: res.data
      });
      dispatch(clearErrors());
      history.push("/");
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getUserData = userHandle => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then(res => {
      dispatch({
        type: SET_PROJECTS,
        payload: res.data.screams
      });
    })
    .catch(() => {
      dispatch({
        type: SET_PROJECTS,
        payload: null
      });
    });
};

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
