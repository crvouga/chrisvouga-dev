import { capitalize } from "@material-ui/core";
import {
  IPersonalProject,
  PERSONAL_PROJECTS,
} from "../../../personal-information";
import {
  getGithubRepository,
  getGithubRepositoryTopics,
} from "../../../services/github";
import { castUrl, encodeUrl } from "../../../utility";
import { IProjectCardProps } from "./project-card";

export const repositoryNameToTitle = (repositoryName: string) =>
  repositoryName.split("-").map(capitalize).join(" ");

const getProjectCardStaticProps = async (
  personalProject: IPersonalProject
): Promise<IProjectCardProps & IPersonalProject> => {
  const [repositoryData, repositoryTopicsData] = await Promise.all([
    getGithubRepository(personalProject),
    getGithubRepositoryTopics(personalProject),
  ]);

  const liveSiteUrl = castUrl(repositoryData.homepage);
  const description = repositoryData.description ?? "";
  const sourceCodeUrl = castUrl(repositoryData.html_url);
  const title = repositoryNameToTitle(personalProject.repositoryName);
  const src = `/${encodeUrl(liveSiteUrl)}.png`;
  const topics = repositoryTopicsData.names ?? [];

  return {
    ...personalProject,
    liveSiteUrl,
    description,
    sourceCodeUrl,
    title,
    src,
    topics,
  };
};

export const getProjectsSectionStaticProps = async () => {
  const projectCardsProps = await Promise.all(
    PERSONAL_PROJECTS.map(getProjectCardStaticProps)
  );

  return projectCardsProps;
};
