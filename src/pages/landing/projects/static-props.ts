import { capitalize } from "@material-ui/core";
import { PROJECTS } from "../../../personal-information";
import { castUrl, encodeUrl } from "../../../utility";
import { IProjectCardProps } from "./project-card";
import {
  getGithubRepository,
  getGithubRepositoryTopics,
} from "../../../services/github";

const repositoryNameToTitle = (repositoryName: string) =>
  repositoryName.split("-").map(capitalize).join(" ");

const getProjectCardStaticProps = async (params: {
  ownerName: string;
  repositoryName: string;
}): Promise<IProjectCardProps> => {
  const [repositoryData, repositoryTopicsData] = await Promise.all([
    getGithubRepository(params),
    getGithubRepositoryTopics(params),
  ]);

  const liveSiteUrl = castUrl(repositoryData.homepage);
  const description = repositoryData.description || "";
  const sourceCodeUrl = castUrl(repositoryData.html_url);
  const title = repositoryNameToTitle(params.repositoryName);
  const src = `/${encodeUrl(liveSiteUrl)}.png`;
  const topics = repositoryTopicsData.names || [];

  return {
    liveSiteUrl,
    description,
    sourceCodeUrl,
    title,
    src,
    topics,
  };
};

export const getProjectSectionStaticProps = async () => {
  const projectCardsProps = await Promise.all(
    PROJECTS.map(getProjectCardStaticProps)
  );

  return projectCardsProps;
};
