// source: https://github.com/settings/tokens

export const getGithubPersonalAccessToken = () => {
  const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

  if (token) {
    return token;
  }

  throw new Error("process.env.GITHUB_PERSONAL_ACCESS_TOKEN is undefined");
};

// source: https://github.com/crvouga/screenshot-service

export const getScreenshotServiceRootUrl = () => {
  const token = process.env.SCREENSHOT_SERVICE_ROOT_URL;

  if (token) {
    return token;
  }

  throw new Error("process.env.SCREENSHOT_SERVICE_ROOT_URL is undefined");
};
