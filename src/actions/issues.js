import {
  FETCH_ISSUES_LOADING,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_ERROR
} from "../constants/issues";
import { searchRepositoryIssues } from "../githubApi";

export const fetchIssues = ({ owner, repository, query = {} }) => {
  return dispatch => {
    if (!owner || !repository) {
      return dispatch({ type: FETCH_ISSUES_SUCCESS, data: [] });
    }

    dispatch({ type: FETCH_ISSUES_LOADING, owner, repository, query });
    return searchRepositoryIssues(owner, repository, query)
      .then(data => dispatch({ type: FETCH_ISSUES_SUCCESS, data }))
      .catch(error => dispatch({ type: FETCH_ISSUES_ERROR, error }));
  };
};
