// @ts-check

import { ensureObject, tag } from "../elem";
import { THEME } from "./theme";

/**
 * @type {import("../elem").H}
 */
export const viewCard = (attr, children) => {
  return tag(
    "article",
    {
      ...attr,
      style: {
        display: "flex",
        "flex-direction": "column",
        "background-Color": THEME.colors.paper,
        border: `1px solid ${THEME.colors.paperBorder}`,
        "border-radius": "8px",
        overflow: "hidden",
        height: "100%",
        ...ensureObject(attr?.style),
      },
    },
    children
  );
};

/**
 * @type {import("../elem").H}
 */
export const viewCardContent = (attrs, children) => {
  return tag(
    "div",
    {
      ...attrs,
      style: {
        padding: "16px",
      },
    },
    children
  );
};
