import { capitalize } from "@material-ui/core";
import content from "../../../../content/content.json";
import { githubAPI } from "../../../services/github";
import { urlToImageSrc } from "../../../services/screenshot";
import { castUrl } from "../../../utility";
import { IProjectCardProps } from "./project-card";

const repositoryNameToTitle = (repositoryName: string) =>
  repositoryName.split("-").map(capitalize).join(" ");

const getProjectCardStaticProps = async ({
  ownerName,
  repositoryName,
}: {
  ownerName: string;
  repositoryName: string;
}): Promise<IProjectCardProps> => {
  const params = {
    owner: ownerName,
    repo: repositoryName,
  };

  const [response, responseTopics, responseLanguages] = await Promise.all([
    githubAPI.repos.get(params),
    githubAPI.repos.getAllTopics(params),
    githubAPI.repos.listLanguages(params),
  ]);

  const liveSiteUrl = castUrl(response.data.homepage);

  return {
    languages: responseLanguages.data,
    liveSiteUrl,
    description: response.data.description || "",
    sourceCodeUrl: castUrl(response.data.html_url),
    title: repositoryNameToTitle(repositoryName),
    src: urlToImageSrc(liveSiteUrl),
    topics: responseTopics.data.names || [],
  };
};

export const getProjectSectionStaticProps = async () => {
  const projectCardsProps = await Promise.all(
    content.projects.map(getProjectCardStaticProps)
  );

  return projectCardsProps;
};
