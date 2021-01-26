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

  const topicFrequencies = projectCardsProps
    .flatMap((props) => props.topics)
    .reduce(
      (topicFrequencies: { [topic: string]: number }, topic) => ({
        ...topicFrequencies,
        [topic]: topic in topicFrequencies ? topicFrequencies[topic] + 1 : 1,
      }),
      {}
    );

  const topTopics = Object.keys(topicFrequencies)
    .sort(descend((topic) => topicFrequencies[topic]))
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
