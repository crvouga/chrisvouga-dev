// @ts-check

import { t } from "../elem";

/**
 * @type {import("../elem").H}
 */
export function viewLink(attr, children) {
  return t(
    "a",
    {
      ...attr,
      target: "_blank",
      rel: "noreferrer noopener",
      style: "text-decoration: underline",
    },
    children
  );
}
