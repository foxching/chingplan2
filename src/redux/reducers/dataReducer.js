import {
  SET_PROJECTS,
  SET_PROJECT,
  POST_PROJECT,
  LOADING_DATA
} from "../types";

const initialState = {
  projects: [],
  project: {},
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
    default:
      return state;
  }
}
