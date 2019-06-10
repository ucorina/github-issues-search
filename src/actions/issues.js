import {
  FETCH_ISSUES_LOADING,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_ERROR
} from "../constants/issues";
import { getGithubIssues } from "../githubApi";

export const fetchIssues = ({ owner, repository }) => {
  return dispatch => {
    if (!owner || !repository) {
      dispatch({ type: FETCH_ISSUES_SUCCESS, issues: [] });
      return;
    }

    dispatch({ type: FETCH_ISSUES_LOADING, owner, repository });
    getGithubIssues(owner, repository)
      .then(issues => dispatch({ type: FETCH_ISSUES_SUCCESS, issues }))
      .catch(error => dispatch({ type: FETCH_ISSUES_ERROR, error }));
  };
};

export const fetchDefaulIssuesOnLoad = () => {
  return (dispatch, getState) => {
    const state = getState();
    return dispatch(
      fetchIssues({
        owner: state.issues.owner,
        repository: state.issues.repository
      })
    );
  };
};
