const GITHUB_API_URL = "https://api.github.com";

const fetchFromGithub = (resource, queryParams = {}) => {
  const url = new URL(`${GITHUB_API_URL}/${resource}`);
  Object.keys(queryParams).forEach(key =>
    url.searchParams.append(key, queryParams[key])
  );
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        return response.json().then(errorDetails => {
          throw errorDetails;
        });
      }
    })
    .then(response => response.json());
};

export const getRepositoryIssues = (owner, repository, queryParams = {}) => {
  return fetchFromGithub(`repos/${owner}/${repository}/issues`, queryParams);
};

export const getRepositoryLabels = (owner, repository) => {
  return fetchFromGithub(`repos/${owner}/${repository}/labels`);
};

export const getRepositoryMilestones = (owner, repository) => {
  return fetchFromGithub(`repos/${owner}/${repository}/milestones`);
};

export const getRepositoryAssignees = (owner, repository) => {
  return fetchFromGithub(`repos/${owner}/${repository}/assignees`);
};
