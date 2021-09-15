import fetch from "node-fetch";
import { capitalize } from "@material-ui/core";

// source: https://github.com/settings/tokens
const getGithubPersonalAccessToken = () => {
  const token = process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN;
  if (token) {
    return token;
  }
  throw new Error(
    "process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN is undefined"
  );
};

export const BASE_URL = `https://api.github.com`;

const getHeaders = () => {
  return {
    "User-Agent": "personal-website",
    //docs: https://docs.github.com/en/rest/overview/other-authentication-methods#basic-authentication
    Authorization: `token ${getGithubPersonalAccessToken()}`,
    Accept: "application/vnd.github.mercy-preview+json",
  };
};

type IGetGithubRepositoryParams = {
  repositoryName: string;
  ownerName: string;
};

//docs: https://docs.github.com/en/rest/reference/repos#get-a-repository
type IGetGithubRepositoryData = {
  homepage: string;
  html_url: string;
  description: string;
};

export const getGithubRepository = async ({
  repositoryName,
  ownerName,
}: IGetGithubRepositoryParams) => {
  const url = `${BASE_URL}/repos/${ownerName}/${repositoryName}`;

  const response = await fetch(url, {
    headers: getHeaders(),
  });

  const data = await response.json();

  if (response.status === 200) {
    return {
      data: data as IGetGithubRepositoryData,
      errors: [],
    };
  }

  return {
    errors: [data] as {
      message: string;
    }[],
  };
};

//docs: https://docs.github.com/en/rest/reference/repos#get-all-repository-topics
type IGetGithubRepositoryTopicsData = {
  names: string[];
};

export const getGithubRepositoryTopics = async ({
  repositoryName,
  ownerName,
}: IGetGithubRepositoryParams) => {
  const url = `${BASE_URL}/repos/${ownerName}/${repositoryName}/topics`;

  const response = await fetch(url, {
    headers: getHeaders(),
  });

  const data = await response.json();

  if (response.status === 200) {
    return {
      data: data as IGetGithubRepositoryTopicsData,
      errors: [],
    };
  }

  return {
    errors: [data] as {
      message: string;
    }[],
  };
};

export const formatRepositoryName = (repositoryName: string) =>
  repositoryName.split("-").map(capitalize).join(" ");
