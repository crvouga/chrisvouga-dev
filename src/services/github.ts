import { Octokit } from "@octokit/rest";

const getGithubPersonalAccessToken = () => {
  const token = process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN;
  if (token) {
    return token;
  }
  throw new Error(
    "process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN is undefined"
  );
};

//docs: https://octokit.github.io/rest.js/v18#usage
export const githubAPI = new Octokit({
  userAgent: "personal-website",
  auth: getGithubPersonalAccessToken(),
});
