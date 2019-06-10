import {
  FETCH_ASSIGNEES_LOADING,
  FETCH_ASSIGNEES_SUCCESS,
  FETCH_ASSIGNEES_ERROR
} from "../constants/assignees";

const initialState = {
  isLoading: false,
  data: [],
  errorMessage: ""
};

const assigneesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ASSIGNEES_LOADING:
      return {
        ...initialState,
        isLoading: true
      };
    case FETCH_ASSIGNEES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    case FETCH_ASSIGNEES_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error.message
      };
    default:
      return state;
  }
};

export default assigneesReducer;
