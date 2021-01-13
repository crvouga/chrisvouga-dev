import { config } from "../config";
import { githubAPI } from "../services/github";
import { encodeUrl } from "../utility";
import { writeScreenshot } from "./screenshot";

const generateScreenshot = async ({
  ownerName,
  repositoryName,
}: {
  ownerName: string;
  repositoryName: string;
}) => {
  const response = await githubAPI.repos.get({
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
  await Promise.all(config.projects.map(generateScreenshot));
};

generateProjectScreenshots();
