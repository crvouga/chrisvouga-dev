// @ts-check

import { data } from "../content/index.js";
import { viewEducationCard } from "../shared/education-card/index.js";
import { viewSection } from "../shared/section.js";
import { viewGridCollapsible } from "../ui/grid-collapsible.js";

/**
 * @type {import("../library/html/index.js").View}
 */
export const viewEducationSection = () => {
  return viewSection({ title: "Education" })({}, [
    viewGridCollapsible({
      children: data.education.map((education) =>
        viewEducationCard({ education })()
      ),
      jsVarSafeNamespace: "educationSection",
    })(),
  ]);
};
