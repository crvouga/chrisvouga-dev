import { Octokit } from "@octokit/rest";
import { getGithubPersonalAccessToken, projects } from "../config";
import { encodeUrl } from "../utility";
import { writeScreenshot } from "./screenshot";

export const octokit = new Octokit({
  userAgent: "personal-website",
  auth: getGithubPersonalAccessToken(),
});

const generateScreenshot = async ({
  ownerName,
  repositoryName,
}: {
  ownerName: string;
  repositoryName: string;
}) => {
  const response = await octokit.repos.get({
    owner: ownerName,
    repo: repositoryName,
  });

  const liveSiteURL = response.data.homepage;

  if (liveSiteURL) {
    const filePath = `public/${encodeUrl(liveSiteURL)}.png`;

    await writeScreenshot({
      url: liveSiteURL,
      timeout: 10000,
      path: filePath,
    });
  }
};

const generateProjectScreenshots = async () => {
  await Promise.all(projects.map(generateScreenshot));
};

generateProjectScreenshots();
