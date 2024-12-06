// @ts-check

import { viewCard } from "../card";
import { viewProjectCardMedia } from "./media/index_";

/**
 *
 * @param {{project: import("../../../content").Project}} input
 * @returns {string}
 */
export const viewProjectCard = (input) => {
  return viewCard({
    children: [viewProjectCardMedia(input)].join(""),
  });
};
