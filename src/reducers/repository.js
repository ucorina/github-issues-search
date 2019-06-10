import { FETCH_ISSUES_LOADING } from "../constants/issues";

const initialState = {
  owner: "tensorflow",
  repository: "tfjs"
};

const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES_LOADING:
      return {
        owner: action.owner,
        repository: action.repository
      };
    default:
      return state;
  }
};

export default issuesReducer;
