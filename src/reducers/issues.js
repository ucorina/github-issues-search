import {
  FETCH_ISSUES_LOADING,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_ERROR
} from "../constants/issues";

const initialState = {
  owner: "tensorflow",
  repository: "tfjs",
  query: {
    state: "all"
  },
  isLoading: false,
  issues: [],
  errorMessage: ""
};

const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES_LOADING:
      return {
        ...initialState,
        owner: action.owner,
        repository: action.repository,
        query: action.query,
        isLoading: true
      };
    case FETCH_ISSUES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        issues: action.issues
      };
    case FETCH_ISSUES_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error.message
      };
    default:
      return state;
  }
};

export default issuesReducer;
