import {
  FETCH_LABELS_LOADING,
  FETCH_LABELS_SUCCESS,
  FETCH_LABELS_ERROR
} from "../constants/labels";

const initialState = {
  isLoading: false,
  data: [],
  errorMessage: ""
};

const labelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LABELS_LOADING:
      return {
        ...initialState,
        isLoading: true
      };
    case FETCH_LABELS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    case FETCH_LABELS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error.message
      };
    default:
      return state;
  }
};

export default labelsReducer;
