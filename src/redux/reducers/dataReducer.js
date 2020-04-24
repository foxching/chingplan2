import {
  SET_PROJECTS,
  SET_PROJECT,
  POST_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  SET_NOTIFICATIONS,
  LOADING_DATA
} from "../types";

const initialState = {
  projects: [],
  project: {},
  notifications: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case SET_PROJECT:
      return {
        ...state,
        project: action.payload,
        loading: false
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project.projectId !== action.payload
        )
      };
    case EDIT_PROJECT:
      return {
        ...state,
        projects: state.projects.map(project => {
          if (project.projectId === action.payload) {
            return {
              ...project,
              ...action.payload2
            };
          } else {
            return project;
          }
        })
      };
    case POST_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects]
      };
    case SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
