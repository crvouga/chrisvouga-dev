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

export const repositoryUrl = "https://github.com/crvouga/personal-website";

export const projects = [
  {
    ownerName: "crvouga",
    repositoryName: "pickflix",
  },
  {
    ownerName: "crvouga",
    repositoryName: "connect-four",
  },
  {
    ownerName: "crvouga",
    repositoryName: "match-three",
  },
  {
    ownerName: "crvouga",
    repositoryName: "personal-website",
  },
  {
    ownerName: "crvouga",
    repositoryName: "simon-says",
  },
];

export const socialMedia = [
  {
    name: "Github",
    url: "https://github.com/crvouga",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/chris-vouga/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ChrisVouga",
  },
];
