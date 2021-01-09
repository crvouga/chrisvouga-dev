import { IProjectCardProps } from "./projects/project-card";
import React from "react";
import { getProjectSectionStaticProps } from "./projects/static-props";

export interface IHomePageStaticProps {
  projectCardsProps: IProjectCardProps[];
}

export const getHomePageStaticProps = async (): Promise<
  IHomePageStaticProps
> => {
  const projectCardsProps = await getProjectSectionStaticProps();

  return {
    projectCardsProps,
  };
};

export const HomePageStaticPropsContext = React.createContext<
  IHomePageStaticProps
>({
  projectCardsProps: [],
});

export const HomePageStaticPropsProvider = ({
  props,
  children,
}: React.PropsWithChildren<{
  props: IHomePageStaticProps;
}>) => {
  return (
    <HomePageStaticPropsContext.Provider value={props}>
      {children}
    </HomePageStaticPropsContext.Provider>
  );
};

export const useHomePageStaticProps = () => {
  return React.useContext(HomePageStaticPropsContext);
};
