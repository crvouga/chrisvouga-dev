// @ts-check

import { data } from "../../../content";
import { viewGrid, viewGridItem } from "../../ui/grid";
import { viewProjectCard } from "../../ui/project-card/index_";
import { viewSection } from "../../ui/section";

/**
 * @type {import("../../core/elem").View}
 */
export const viewSideProjectsSection = () => {
  return viewSection({
    title: "Side Projects",
  })({}, [
    viewGrid(
      {},
      data.sideProjects.map((project) =>
        viewGridItem({}, [viewProjectCard({ project })()])
      )
    ),
  ]);
};
