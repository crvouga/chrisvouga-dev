// @ts-check

import { data } from "src/content";
import { viewProjectCard } from "src/shared/project-card";
import { viewSection } from "src/shared/section";
import { viewGridCollapsible } from "src/ui/grid-collapsible";

/**
 * @type {import("src/library/html").View}
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
