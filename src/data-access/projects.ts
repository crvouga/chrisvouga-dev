import {
  getGithubRepository,
  getGithubRepositoryTopics,
} from "../services/github";
import { castUrl } from "../utility";
import { descend } from "../utility/sort";

export type IProjectConfig = {
  title: string;
  screenshotTimeout?: number;
  liveSiteUrl?: string;
  github: {
    repositoryName: string;
    ownerName: string;
  };
};

export type IProject = {
  projectId: IProjectConfig;
  title: string;
  liveSiteUrl: string;
  screenshotTimeout: number;
  sourceCodeUrl: string;
  topics: string[];
  description: string;
};

export type IProjectDataStore = {
  getOne: (
    id: IProjectConfig
  ) => Promise<{ data?: IProject; errors: { message: string }[] }>;
  getAll: (
    ids: IProjectConfig[]
  ) => Promise<{ data?: IProject[]; errors: { message: string }[] }>;
  getTopTopics: (params: {
    projectIds: IProjectConfig[];
    topicCount: number;
  }) => Promise<string[]>;
};

const getOneProject: IProjectDataStore["getOne"] = async (projectId) => {
  const [repositoryResponse, repositoryTopicsResponse] = await Promise.all([
    getGithubRepository(projectId.github),
    getGithubRepositoryTopics(projectId.github),
  ]);

  if (repositoryResponse.data && repositoryTopicsResponse.data) {
    return {
      data: {
        projectId,
        liveSiteUrl:
          projectId.liveSiteUrl ?? castUrl(repositoryResponse.data.homepage),
        description: repositoryResponse.data.description ?? "",
        sourceCodeUrl: castUrl(repositoryResponse.data.html_url),
        title: projectId.title,
        topics: repositoryTopicsResponse.data.names ?? [],
        screenshotTimeout: projectId.screenshotTimeout ?? 0,
      },
      errors: [],
    };
  }

  return {
    errors: [...repositoryResponse.errors, ...repositoryTopicsResponse.errors],
  };
};

export const getAllProjects: IProjectDataStore["getAll"] = async (
  projectIds
) => {
  const projectResponses = await Promise.all(projectIds.map(getOneProject));

  const response: { data?: IProject[]; errors: { message: string }[] } = {
    errors: [],
  };

  for (const { data, errors } of projectResponses) {
    if (data) {
      response.data = [...(response.data ?? []), data];
    }

    if (errors) {
      response.errors = [...response.errors, ...errors];
    }
  }

  return response;
};

export const getTopProjectTopics: IProjectDataStore["getTopTopics"] = async ({
  projectIds,
  topicCount,
}) => {
  const responses = await getAllProjects(projectIds);

  const topicFrequencies = (responses.data ?? [])
    .flatMap((project) => project.topics)
    .reduce<{ [topic: string]: number }>(
      (frequencies, topic) => ({
        ...frequencies,
        [topic]: topic in frequencies ? frequencies[topic] + 1 : 1,
      }),
      {}
    );

  const topTopics = Object.keys(topicFrequencies)
    .sort(descend((topic) => topicFrequencies[topic]))
    .slice(0, topicCount);

  return topTopics;
};

export const ProjectDataStore = (): IProjectDataStore => {
  return {
    getOne: getOneProject,
    getAll: getAllProjects,
    getTopTopics: getTopProjectTopics,
  };
};
