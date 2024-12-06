// @ts-check

import { projectToLinkHref } from "../../../content";
import { tag } from "../../elem";
import { viewCard } from "../card";
import { viewProjectCardContent } from "./content/index_";
import { viewProjectCardMedia } from "./media/index_";

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
    viewProjectCardContent(propsNew)({}),
    tag("div", { style: { flex: 1, width: "100%" } }, []),
  ]);
};
