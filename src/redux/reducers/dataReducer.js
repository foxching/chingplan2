import {
  SET_PROJECTS,
  SET_PROJECT,
  POST_PROJECT,
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
        project: action.payload
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
