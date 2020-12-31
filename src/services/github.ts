import { Octokit } from "@octokit/rest";

const getGithubPersonalAccessToken = () => {
  return process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
};

//docs: https://octokit.github.io/rest.js/v18#usage
export const githubAPI = new Octokit({
  userAgent: "personal-website",
  auth: getGithubPersonalAccessToken(),
});
