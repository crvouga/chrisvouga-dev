// @ts-check

import { tag } from "../elem";

/**
 * @type {import("../elem").H}
 */
export function viewLink(attr, children) {
  return tag(
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
