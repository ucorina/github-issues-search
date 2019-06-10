import {
  FETCH_ISSUES_LOADING,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_ERROR
} from "../constants/issues";

const initialState = {
  owner: "tensorflow",
  repository: "tfjs",
  isLoading: false,
  issues: [],
  errorMessage: ""
};

const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES_LOADING:
      return {
        ...state,
        isLoading: true,
        issues: []
      };
    case FETCH_ISSUES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        issues: action.issues
      };
    case FETCH_ISSUES_ERROR:
      // TODO Check exactly how to read the error from here
      return {
        ...state,
        isLoading: false,
        errorMessage: JSON.stringify(action.error)
      };
    default:
      return state;
  }
};

export default issuesReducer;
