// @ts-check

import { ensureObject, tag } from "../library/html";

/**
 * @type {import("../library/html").View}
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
        style: {
          ...ensureObject(attrs?.style),
          "text-decoration": "underline",
        },
      },
      children
    );
  }

  return tag("span", attrs, children);
};
