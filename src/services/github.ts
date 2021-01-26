import fetch from "node-fetch";
import { getGithubPersonalAccessToken } from "../config";

const headers = {
  "User-Agent": "personal-website",
  Authorization: getGithubPersonalAccessToken(),
};

export const BASE_URL = `https://api.github.com`;

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
    headers,
  });

  const data: IGetGithubRepositoryData = await response.json();

  return data;
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
    headers: {
      ...headers,
      Accept: "application/vnd.github.mercy-preview+json",
    },
  });

  const data: IGetGithubRepositoryTopicsData = await response.json();

  console.log({ data });

  return data;
};
