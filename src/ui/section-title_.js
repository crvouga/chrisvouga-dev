// @ts-check

import { viewTypography } from "./typography";

/**
 * @param {{title:string}} param0
 * @returns {string}
 */
export function viewSectionTitle({ title }) {
  return viewTypography({
    level: "h2",
    style: "padding-bottom: 3rem; text-align: left; font-weight: 900;",
    children: title,
  });
}
