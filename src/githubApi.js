const GITHUB_API_URL = "https://api.github.com";

export const getGithubIssues = (owner, repository) => {
  return fetch(`${GITHUB_API_URL}/repos/${owner}/${repository}/issues`)
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
