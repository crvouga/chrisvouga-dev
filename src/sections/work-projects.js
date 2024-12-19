// @ts-check

import { data } from "src/content/index.js";
import { viewProjectCard } from "src/shared/project-card/index.js";
import { viewSection } from "src/shared/section.js";
import { viewGridCollapsible } from "src/ui/grid-collapsible.js";

/**
 * @type {import("src/library/html/index.js").View}
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
