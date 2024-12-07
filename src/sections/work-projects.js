// @ts-check

import { data } from "../content";
import { viewGrid, viewGridItem } from "../ui/grid";
import { viewProjectCard } from "../shared/project-card";
import { viewSection } from "../shared/section";

/**
 * @type {import("../library/html").View}
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
