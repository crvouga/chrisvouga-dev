// formspree dashboard: https://formspree.io/forms/xqkgwwnv/integration
export const getContactFormEndpoint = () => {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  if (endpoint) {
    return endpoint;
  }
  throw new Error("process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT is undefined");
};

// reCaptcha dashboard: https://www.google.com/recaptcha/admin/site/439039356
export const getReCaptchKey = () => {
  const key = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
  if (key) {
    return key;
  }
  throw new Error("process.env.NEXT_PUBLIC_RECAPTCHA_KEY is undefined");
};

//
export const getGithubPersonalAccessToken = () => {
  return process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN;
};
