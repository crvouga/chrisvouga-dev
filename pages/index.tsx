import { GetStaticProps } from "next";
import React from "react";
import { LandingPage } from "../src/pages/landing";
import {
  getLandingPageStaticProps,
  LandingPageStaticPropsProvider,
  ILandingPageStaticProps,
} from "../src/pages/landing/static-props";

export const getStaticProps: GetStaticProps<ILandingPageStaticProps> = async () => {
  const props = await getLandingPageStaticProps();
  return {
    props,
  };
};

const Index = (props: ILandingPageStaticProps) => {
  return (
    <LandingPageStaticPropsProvider props={props}>
      <LandingPage />
    </LandingPageStaticPropsProvider>
  );
};

export default Index;
