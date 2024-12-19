import { data } from "../../content/index.js";
import { viewProjectCard } from "../../shared/project-card/index.js";
import { viewSection } from "../../shared/section.js";
import { viewGridCollapsible } from "../../ui/grid-collapsible.js";

/**
 * @type {import("../../library/html/index.js").View}
 */
export const viewSideProjectsSection = () => {
  return viewSection({
    title: "Side Projects",
  })({}, [
    viewGridCollapsible({
      children: data.sideProjects.map((project) =>
        viewProjectCard({ project })()
      ),
      jsVarSafeNamespace: "sideProjectsSection",
    })(),
  ]);
};
