import React from "react";
import { descend } from "../../utility/sort";
import { IProjectCardProps } from "./projects/project-card";
import { getProjectSectionStaticProps } from "./projects/static-props";

export interface ILandingPageStaticProps {
  projectCardsProps: IProjectCardProps[];
  topTopics: string[];
}

export const getLandingPageStaticProps = async (): Promise<
  ILandingPageStaticProps
> => {
  const projectCardsProps = await getProjectSectionStaticProps();

  const frequencies = projectCardsProps
    .flatMap((props) => props.topics)
    .reduce<{ [topic: string]: number }>(
      (frequencies, topic) => ({
        ...frequencies,
        [topic]: topic in frequencies ? frequencies[topic] + 1 : 1,
      }),
      {}
    );

  const topTopics = Object.keys(frequencies)
    .sort(descend((topic) => frequencies[topic]))
    .slice(0, 5);

  return {
    topTopics,
    projectCardsProps,
  };
};

export const LandingPageStaticPropsContext = React.createContext<
  ILandingPageStaticProps
>({
  topTopics: [],
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
