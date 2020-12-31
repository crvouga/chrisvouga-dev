import projects from "../../content/projects.json";
console.log({ projects });
const generateProjectScreenshots = async () => {
  // await Promise.all(
  //   projects.map(async ({ liveSiteURL }) => {
  //     await writeScreenshot({
  //       url: liveSiteURL,
  //       timeout: 10000,
  //       path: urlToImagePath(liveSiteURL),
  //     });
  //   })
  // );
};

generateProjectScreenshots();
