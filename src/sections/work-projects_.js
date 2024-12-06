// @ts-check

import { data } from "../../content";
import { viewGrid, viewGridItem } from "../ui/grid";
import { viewProjectCard } from "../ui/project-card/index_";
import { viewSection } from "../ui/section";

/**
 * @type {import("../core/elem").View}
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
