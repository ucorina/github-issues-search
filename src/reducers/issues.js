import {
  FETCH_ISSUES_LOADING,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_ERROR
} from "../constants/issues";

const initialState = {
  query: {
    state: "all"
  },
  isLoading: false,
  data: [],
  errorMessage: ""
};

const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES_LOADING:
      return {
        ...initialState,
        query: action.query,
        isLoading: true
      };
    case FETCH_ISSUES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
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
