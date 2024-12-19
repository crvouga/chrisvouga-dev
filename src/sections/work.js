// @ts-check

import { data } from "src/content";
import { viewSection } from "src/shared/section";
import { viewWorkCard } from "src/shared/work-card";
import { viewGridCollapsible } from "src/ui/grid-collapsible";

/**
 * @type {import("src/library/html").View}
 */
export const viewWorkSection = () => {
  return viewSection({ title: "Work" })({}, [
    viewGridCollapsible({
      children: data.work.map((work) => viewWorkCard({ work })()),
      jsVarSafeNamespace: "workSection",
    })(),
  ]);
};
