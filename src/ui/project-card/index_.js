// @ts-check

import { viewCard } from "../card";
import { viewProjectCardMedia } from "./media/index_";

/**
 * @type {import("./props").ProjectCardView}
 */
export const viewProjectCard = (props) => (attr, children) => {
  return viewCard(attr, [viewProjectCardMedia(props)(), ...(children ?? [])]);
};
