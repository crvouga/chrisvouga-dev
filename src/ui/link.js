// @ts-check

import { tag } from "../elem";

/**
 * @type {import("../elem").H}
 */
export const viewLink = (attrs, children) => {
  const href = attrs?.href;

  if (typeof href === "string" && href.trim().length > 0) {
    return tag(
      "a",
      {
        ...attrs,
        target: "_blank",
        rel: "noreferrer noopener",
        style: "text-decoration: underline",
      },
      children
    );
  }

  return tag("span", attrs, children);
};
