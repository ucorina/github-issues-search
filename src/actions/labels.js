import {
  FETCH_LABELS_LOADING,
  FETCH_LABELS_SUCCESS,
  FETCH_LABELS_ERROR
} from "../constants/labels";
import { getRepositoryLabels } from "../githubApi";

export const fetchLabels = ({ owner, repository }) => {
  return dispatch => {
    if (!owner || !repository) {
      return dispatch({ type: FETCH_LABELS_SUCCESS, data: [] });
    }

    dispatch({ type: FETCH_LABELS_LOADING });
    return getRepositoryLabels(owner, repository)
      .then(data => dispatch({ type: FETCH_LABELS_SUCCESS, data }))
      .catch(error => dispatch({ type: FETCH_LABELS_ERROR, error }));
  };
};
