// @ts-check

import { data } from "../content";
import { viewGrid, viewGridItem } from "../ui/grid";
import { viewSection } from "../shared/section";
import { viewWorkCard } from "../shared/work-card";

/**
 * @type {import("../library/html").View}
 */
export const viewWorkSection = () => {
  return viewSection({ title: "Work" })({}, [
    viewGrid(
      {},
      data.work.map((work) => viewGridItem({}, [viewWorkCard({ work })()]))
    ),
  ]);
};
