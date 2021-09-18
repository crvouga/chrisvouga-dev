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

export const SCREENSHOT_SERVICE_ROOT_URL =
  "https://crvouga-screenshot-service.herokuapp.com";
// export const SCREENSHOT_SERVICE_ROOT_URL = "http://localhost:8000";
