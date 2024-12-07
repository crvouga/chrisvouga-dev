// @ts-check

import { data } from "src/content";
import { viewGrid, viewGridItem } from "src/ui/grid";
import { viewProjectCard } from "src/shared/project-card";
import { viewSection } from "src/shared/section";

/**
 * @type {import("src/library/html").View}
 */
export const viewWorkProjectsSection = (a, _) => {
  return viewSection({
    title: "Work Projects",
  })(a, [
    viewGrid(
      {},
      data.workProjects.map((project) =>
        viewGridItem({}, [viewProjectCard({ project })()])
      )
    ),
  ]);
};
