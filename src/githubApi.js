const GITHUB_API_URL = "https://api.github.com";

export const getGithubIssues = (owner, repository, queryParams = {}) => {
  const ISSUES_URL = `${GITHUB_API_URL}/repos/${owner}/${repository}/issues`;
  const url = new URL(ISSUES_URL);
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

/**
 *
 */
