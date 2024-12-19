// @ts-check

import { data } from "../content/index.js";
import { viewProjectCard } from "../shared/project-card/index.js";
import { viewSection } from "../shared/section.js";
import { viewGridCollapsible } from "../ui/grid-collapsible.js";

/**
 * @type {import("../library/html/index.js").View}
 */
export const viewWorkProjectsSection = (a, _) => {
  return viewSection({
    title: "Work Projects",
  })(a, [
    viewGridCollapsible({
      children: data.workProjects.map((project) =>
        viewProjectCard({ project })()
      ),
      jsVarSafeNamespace: "workProjectsSection",
    })(),
  ]);
};
