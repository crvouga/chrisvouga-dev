// @ts-check

import { data } from "src/content";
import { viewGrid, viewGridItem } from "src/ui/grid";
import { viewSection } from "src/shared/section";
import { viewWorkCard } from "src/shared/work-card";

/**
 * @type {import("src/library/html").View}
 */
export const viewWorkSection = () => {
  return viewSection({ title: "Work" })({}, [
    viewGrid(
      {},
      data.work.map((work) => viewGridItem({}, [viewWorkCard({ work })()]))
    ),
  ]);
};
