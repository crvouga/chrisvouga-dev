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
  const [
    { homepage, description, html_url },
    { names: topics },
  ] = await Promise.all([
    getGithubRepository(params),
    getGithubRepositoryTopics(params),
  ]);

  const liveSiteUrl = castUrl(homepage);

  const src = `/${encodeUrl(liveSiteUrl)}.png`;

  return {
    liveSiteUrl,
    description: description || "",
    sourceCodeUrl: castUrl(html_url),
    title: repositoryNameToTitle(params.repositoryName),
    src,
    topics: topics || [],
  };
};

export const getProjectSectionStaticProps = async () => {
  const projectCardsProps = await Promise.all(
    PROJECTS.map(getProjectCardStaticProps)
  );

  return projectCardsProps;
};
