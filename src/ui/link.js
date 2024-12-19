// @ts-check

import { ensureObject } from "src/library/ensure-object.js";
import { tag } from "src/library/html/index.js";

/**
 * @type {import("src/library/html/index.js").View}
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
