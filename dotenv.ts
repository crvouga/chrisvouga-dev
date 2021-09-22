// source: https://github.com/settings/tokens
const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

export const getGithubPersonalAccessToken = () => {
  if (token) {
    return token;
  }

  throw new Error("process.env.GITHUB_PERSONAL_ACCESS_TOKEN is undefined");
};

// source: https://github.com/crvouga/screenshot-service
const SCREENSHOT_SERVICE_ROOT_URL = process.env.SCREENSHOT_SERVICE_ROOT_URL;

const SCREENSHOT_SERVICE_ROOT_URL_DEV =
  process.env.SCREENSHOT_SERVICE_ROOT_URL_DEV;

export const getScreenshotServiceRootUrl = () => {
  if (SCREENSHOT_SERVICE_ROOT_URL_DEV) {
    return SCREENSHOT_SERVICE_ROOT_URL_DEV;
  }

  if (SCREENSHOT_SERVICE_ROOT_URL) {
    return SCREENSHOT_SERVICE_ROOT_URL;
  }

  throw new Error("process.env.SCREENSHOT_SERVICE_ROOT_URL is undefined");
};
