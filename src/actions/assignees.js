import {
  FETCH_ASSIGNEES_LOADING,
  FETCH_ASSIGNEES_SUCCESS,
  FETCH_ASSIGNEES_ERROR
} from "../constants/assignees";
import { getRepositoryAssignees } from "../githubApi";

export const fetchAssignees = ({ owner, repository }) => {
  return dispatch => {
    if (!owner || !repository) {
      return dispatch({ type: FETCH_ASSIGNEES_SUCCESS, data: [] });
    }

    dispatch({ type: FETCH_ASSIGNEES_LOADING });
    return getRepositoryAssignees(owner, repository)
      .then(data => dispatch({ type: FETCH_ASSIGNEES_SUCCESS, data }))
      .catch(error => dispatch({ type: FETCH_ASSIGNEES_ERROR, error }));
  };
};
