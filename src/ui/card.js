// @ts-check

import { ensureObject, tag } from "../elem";
import { THEME, unit } from "./theme";

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
        height: "100%",
        display: "flex",
        "flex-direction": "column",
        ...ensureObject(attrs?.style),
      },
    },
    children
  );
};

/**
 * @type {import("../elem").H}
 */
export const viewCardActions = (attrs, children) => {
  return tag(
    "div",
    {
      ...attrs,
      style: {
        display: "flex",
        "padding-top": unit(2),
        "flex-direction": "row",
        "align-items": "center",
        "justify-content": "flex-start",
        gap: unit(3),
      },
    },
    children
  );
};
