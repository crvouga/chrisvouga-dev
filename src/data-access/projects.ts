import {
  getGithubRepository,
  getGithubRepositoryTopics,
} from "../services/github";
import { castUrl } from "../utility";
import { descend } from "../utility/sort";

export type IProjectId = Partial<IProject> & {
  title: string;
  github: {
    repositoryName: string;
    ownerName: string;
  };
};

export type IProject = {
  projectId: IProjectId;
  title: string;
  liveSiteUrl: string;
  sourceCodeUrl: string;
  topics: string[];
  description: string;
};

export type IProjectDataStore = {
  getOne: (
    id: IProjectId,
  ) => Promise<{ data?: IProject; errors: { message: string }[] }>;
  getAll: (
    ids: IProjectId[],
  ) => Promise<{ data?: IProject[]; errors: { message: string }[] }>;
  getTopTopics: (params: {
    projectIds: IProjectId[];
    topicCount: number;
  }) => Promise<string[]>;
};

const getOneProject: IProjectDataStore["getOne"] = async (projectId) => {
  const [repositoryResponse, repositoryTopicsResponse] = await Promise.all([
    getGithubRepository(projectId.github),
    getGithubRepositoryTopics(projectId.github),
  ]);

  if (repositoryResponse.data && repositoryTopicsResponse.data) {
    const liveSiteUrl = projectId.liveSiteUrl ?? castUrl(
      repositoryResponse.data.homepage,
    );
    const description = repositoryResponse.data.description ?? "";
    const sourceCodeUrl = castUrl(repositoryResponse.data.html_url);
    const title = projectId.title;
    const topics = repositoryTopicsResponse.data.names ?? [];

    return {
      data: {
        projectId,
        liveSiteUrl,
        description,
        sourceCodeUrl,
        title,
        topics,
      },
      errors: [],
    };
  }

  return {
    errors: [...repositoryResponse.errors, ...repositoryTopicsResponse.errors],
  };
};

export const getAllProjects: IProjectDataStore["getAll"] = async (
  projectIds,
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
      {},
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
