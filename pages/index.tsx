import { GetStaticProps } from "next";
import {
  getLandingPageData,
  ILandingPageProps,
  LandingPage,
} from "../src/pages/landing";
import { generateAssets } from "../src/scripts/generate-assets/generate-assets";

export const getStaticProps: GetStaticProps<ILandingPageProps> = async () => {
  await generateAssets();

  return {
    revalidate: 60,
    props: {
      data: await getLandingPageData(),
    },
  };
};

export default LandingPage;
