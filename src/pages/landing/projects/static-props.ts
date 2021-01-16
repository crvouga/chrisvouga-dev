import { capitalize } from "@material-ui/core";
import { Octokit } from "@octokit/rest";
import { getGithubPersonalAccessToken } from "../../../config";
import { PROJECTS } from "../../../constants";
import { castUrl, encodeUrl } from "../../../utility";
import { IProjectCardProps } from "./project-card";

export const octokit = new Octokit({
  userAgent: "personal-website",
  auth: getGithubPersonalAccessToken(),
});

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
    octokit.repos.get(params),
    octokit.repos.getAllTopics(params),
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
    PROJECTS.map(getProjectCardStaticProps)
  );

  return projectCardsProps;
};
