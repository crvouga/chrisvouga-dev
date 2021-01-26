import React from "react";
import { IProjectCardProps } from "./projects/project-card";
import { getProjectSectionStaticProps } from "./projects/static-props";

export interface ILandingPageStaticProps {
  projectCardsProps: IProjectCardProps[];
}

export const getLandingPageStaticProps = async (): Promise<
  ILandingPageStaticProps
> => {
  const projectCardsProps = await getProjectSectionStaticProps();

  return {
    projectCardsProps,
  };
};

export const LandingPageStaticPropsContext = React.createContext<
  ILandingPageStaticProps
>({
  projectCardsProps: [],
});

export const LandingPageStaticPropsProvider = ({
  props,
  children,
}: React.PropsWithChildren<{
  props: ILandingPageStaticProps;
}>) => {
  return (
    <LandingPageStaticPropsContext.Provider value={props}>
      {children}
    </LandingPageStaticPropsContext.Provider>
  );
};

export const useLandingPageStaticProps = () => {
  return React.useContext(LandingPageStaticPropsContext);
};
