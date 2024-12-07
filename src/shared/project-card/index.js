// @ts-check

import { tag } from "src/library/html";
import { projectToLinkHref } from "src/content/project";
import { viewCard, viewCardContent } from "src/ui/card";
import { unit } from "src/ui/theme";
import { viewProjectCardActions } from "./actions";
import { viewProjectCardContentMain } from "./content";
import { viewProjectCardMedia } from "./media";
import { viewProjectCardStatus } from "./status";

/**
 * @type {import("./props").ProjectCardView}
 */
export const viewProjectCard = (props) => (a, _c) => {
  /**
   * @type {import("./props").ProjectCardProps}
   */
  const propsNew = {
    ...props,
    linkHref: projectToLinkHref(props.project),
  };
  return viewCard(a, [
    viewProjectCardMedia(propsNew)({}),
    viewCardContent(
      {
        style: {
          gap: unit(2),
        },
      },
      [
        viewProjectCardContentMain(propsNew)({}),
        tag("div", { style: { flex: 1, width: "100%", "flex-shrink": 0 } }, []),
        viewProjectCardStatus(propsNew)({}),
        viewProjectCardActions(propsNew)({}),
      ]
    ),
  ]);
};
