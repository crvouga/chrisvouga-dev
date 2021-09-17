import { GetStaticProps } from "next";
import {
  getLandingPageProps,
  ILandingPageProps,
  LandingPage,
} from "../src/pages/landing";

export const getStaticProps: GetStaticProps<ILandingPageProps> = async () => {
  return {
    props: await getLandingPageProps(),
    revalidate: 60,
  };
};

export default LandingPage;
