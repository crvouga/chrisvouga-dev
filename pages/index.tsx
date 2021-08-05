import { GetStaticProps } from "next";
import { dataStore } from "../src/data-access";
import { ILandingPageProps, LandingPage } from "../src/pages/landing";

export const getStaticProps: GetStaticProps<ILandingPageProps> = async () => {
  return {
    props: {
      data: {
        aboutMe: await dataStore.aboutMe.get(),
        projects: await dataStore.projects.getAll(),
        topTopics: await dataStore.projects.getTopTopics({ topicCount: 20 }),
        socialMedia: await dataStore.socialMedia.getAll(),
        meta: await dataStore.meta.get(),
      },
    },
  };
};

export default LandingPage;
