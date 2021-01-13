import { capitalize } from "@material-ui/core";
import { config } from "../../../config";
import { githubAPI } from "../../../services/github";
import { castUrl, encodeUrl } from "../../../utility";
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

  const [response, responseTopics] = await Promise.all([
    githubAPI.repos.get(params),
    githubAPI.repos.getAllTopics(params),
  ]);

  const liveSiteUrl = castUrl(response.data.homepage);

  const src = `/${encodeUrl(liveSiteUrl)}.png`;

  return {
    liveSiteUrl,
    description: response.data.description || "",
    sourceCodeUrl: castUrl(response.data.html_url),
    title: repositoryNameToTitle(repositoryName),
    src,
    topics: responseTopics.data.names || [],
  };
};

export const getProjectSectionStaticProps = async () => {
  const projectCardsProps = await Promise.all(
    config.projects.map(getProjectCardStaticProps)
  );

  return projectCardsProps;
};
