import { GetStaticProps } from "next";
import { dataStore } from "../src/data-access";
import { ILandingPageProps, LandingPage } from "../src/pages/landing";

export const getStaticProps: GetStaticProps<ILandingPageProps> = async () => {
  return {
    props: {
      data: {
        aboutMe: await dataStore.aboutMe.get(),
        projects: await dataStore.projects.getAll(),
        topTopics: await dataStore.projects.getTopTopics({ topicCount: 10 }),
        socialMedia: await dataStore.socialMedia.getAll(),
        hero: await dataStore.hero.get(),
        meta: await dataStore.meta.get(),
      },
    },
  };
};

export default LandingPage;
