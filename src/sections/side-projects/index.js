import { data } from "src/content";
import { viewProjectCard } from "src/shared/project-card";
import { viewSection } from "src/shared/section";
import { viewGridCollapsible } from "src/ui/grid-collapsible";

/**
 * @type {import("src/library/html").View}
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
