// @ts-check

import { data } from "../../../content";
import { viewGrid, viewGridItem } from "../../ui/grid";
import { viewProjectCard } from "../../ui/project-card/index_";
import { viewSection } from "../../ui/section";

export const viewSideProjects = () => {
  return viewSection({
    title: "Side Projects",
    children: viewGrid({
      children: data.sideProjects
        .map((project) =>
          viewGridItem({
            children: viewProjectCard({ project }),
          })
        )
        .join(" "),
    }),
  });
};
