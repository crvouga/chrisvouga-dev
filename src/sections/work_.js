// @ts-check

import { data } from "../../content";
import { viewGrid, viewGridItem } from "../ui/grid";
import { viewSection } from "../ui/section";
import { viewWorkCard } from "../ui/work-card_";

/**
 * @type {import("../elem").H}
 */
export const viewWorkSection = () => {
  return viewSection({ title: "Work" })({}, [
    viewGrid(
      {},
      data.work.map((work) => viewGridItem({}, [viewWorkCard({ work })()]))
    ),
  ]);
};
