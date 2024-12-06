// @ts-check

import { projectToLinkHref } from "../../../content";
import { tag } from "../../core/elem";
import { viewCard, viewCardContent } from "../card";
import { unit } from "../theme";
import { viewProjectCardActions } from "./actions/index_";
import { viewProjectCardContentMain } from "./content/index_";
import { viewProjectCardMedia } from "./media/index_";
import { viewProjectCardStatus } from "./status/index_";

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
