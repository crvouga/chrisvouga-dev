import { GetStaticProps } from "next";
import React from "react";
import { LandingPage } from "../src/pages/landing";
import {
  getLandingPageStaticProps,
  ILandingPageStaticProps,
  LandingPageStaticPropsProvider,
} from "../src/pages/landing/static-props";

type IndexPageProps = ILandingPageStaticProps;

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const props = await getLandingPageStaticProps();

  return {
    props,
  };
};

const Index = (props: IndexPageProps) => {
  return (
    <React.Fragment>
      <LandingPageStaticPropsProvider props={props}>
        <LandingPage />
      </LandingPageStaticPropsProvider>
    </React.Fragment>
  );
};

export default Index;
