import { fetchIssues } from "./issues";
import { fetchLabels } from "./labels";

export const fetchRepositoryDataOnLoad = () => {
  return (dispatch, getState) => {
    const state = getState();
    const { owner, repository } = state.repository;

    dispatch(fetchIssues({ owner, repository, query: state.issues.query }));
    dispatch(fetchLabels({ owner, repository }));
  };
};
