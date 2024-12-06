// @ts-check

import { data } from "../../content";
import { viewGrid, viewGridItem } from "../ui/grid";
import { viewProjectCard } from "../ui/project-card/index_";
import { viewSection } from "../ui/section";

export const viewWorkProjectsSection = () => {
  return viewSection({
    title: "Work Projects",
    children: viewGrid({
      children: data.workProjects
        .map((project) =>
          viewGridItem({ children: viewProjectCard({ project }) })
        )
        .join(" "),
    }),
  });
};
