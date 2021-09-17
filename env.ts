// source: https://github.com/settings/tokens

export const getGithubPersonalAccessToken = () => {
  const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

  if (token) {
    return token;
  }

  throw new Error(
    "process.env.GITHUB_PERSONAL_ACCESS_TOKEN is undefined",
  );
};
