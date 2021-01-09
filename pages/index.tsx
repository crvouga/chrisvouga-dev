import { GetStaticProps } from "next";
import React from "react";
import { HomePage } from "../src/pages/home";
import {
  getHomePageStaticProps,
  HomePageStaticPropsProvider,
  IHomePageStaticProps,
} from "../src/pages/home/static-props";

export const getStaticProps: GetStaticProps<IHomePageStaticProps> = async () => {
  const props = await getHomePageStaticProps();
  return {
    props,
  };
};

const Index = (props: IHomePageStaticProps) => {
  return (
    <HomePageStaticPropsProvider props={props}>
      <HomePage />
    </HomePageStaticPropsProvider>
  );
};

export default Index;
