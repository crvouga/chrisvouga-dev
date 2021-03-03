import projectIds from "../../content/project-ids.json";
import {
  getGithubRepository,
  getGithubRepositoryTopics,
} from "../services/github";
import { castUrl, encodeUrl } from "../utility";
import { descend } from "../utility/sort";

export type IProjectId = {
  repositoryName: string;
  ownerName: string;
  title: string;
};

export type IProject = {
  projectId: IProjectId;
  src: string;
  title: string;
  liveSiteUrl: string;
  sourceCodeUrl: string;
  topics: string[];
  description: string;
};

export type IProjectDataStore = {
  getOne: (id: IProjectId) => Promise<IProject>;
  getAll: () => Promise<IProject[]>;
  getTopTopics: () => Promise<string[]>;
};

const getOneProject = async (projectId: IProjectId): Promise<IProject> => {
  const [repositoryData, repositoryTopicsData] = await Promise.all([
    getGithubRepository({
      repositoryName: projectId.repositoryName,
      ownerName: projectId.ownerName,
    }),
    getGithubRepositoryTopics({
      repositoryName: projectId.repositoryName,
      ownerName: projectId.ownerName,
    }),
  ]);

  const liveSiteUrl = castUrl(repositoryData.homepage);
  const description = repositoryData.description ?? "";
  const sourceCodeUrl = castUrl(repositoryData.html_url);
  const title = projectId.title;
  const src = `/${encodeUrl(liveSiteUrl)}.png`;
  const topics = repositoryTopicsData.names ?? [];

  return {
    projectId,
    liveSiteUrl,
    description,
    sourceCodeUrl,
    title,
    src,
    topics,
  };
};

export const getAllProjects = async () => {
  return Promise.all(projectIds.map(getOneProject));
};

export const getTopProjectTopics = async () => {
  const projects = await getAllProjects();

  const topicFrequencies = projects
    .flatMap((props) => props.topics)
    .reduce<{ [topic: string]: number }>(
      (frequencies, topic) => ({
        ...frequencies,
        [topic]: topic in frequencies ? frequencies[topic] + 1 : 1,
      }),
      {}
    );

  const topTopics = Object.keys(topicFrequencies)
    .sort(descend((topic) => topicFrequencies[topic]))
    .slice(0, 5);

  return topTopics;
};

export const ProjectDataStore = (): IProjectDataStore => {
  return {
    getOne: getOneProject,
    getAll: getAllProjects,
    getTopTopics: getTopProjectTopics,
  };
};
