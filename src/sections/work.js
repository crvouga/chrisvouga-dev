// @ts-check

import { data } from "src/content/index.js";
import { viewSection } from "src/shared/section.js";
import { viewWorkCard } from "src/shared/work-card.js";
import { viewGridCollapsible } from "src/ui/grid-collapsible.js";

/**
 * @type {import("src/library/html/index.js").View}
 */
export const viewWorkSection = () => {
  return viewSection({ title: "Work" })({}, [
    viewGridCollapsible({
      children: data.work.map((work) => viewWorkCard({ work })()),
      jsVarSafeNamespace: "workSection",
    })(),
  ]);
};
