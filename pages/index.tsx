import { GetStaticProps } from "next";
import {
  getLandingPageData,
  ILandingPageProps,
  LandingPage,
} from "../src/pages/landing";

export const getStaticProps: GetStaticProps<ILandingPageProps> = async () => {
  return {
    revalidate: 60,
    props: {
      data: await getLandingPageData(),
    },
  };
};

export default LandingPage;
