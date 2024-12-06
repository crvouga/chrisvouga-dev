// @ts-check

import { ensureObject, t } from "../elem";
import { THEME } from "./theme";

/**
 * @type {import("../elem").H}
 */
export const viewCard = (attr, children) => {
  return t(
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
  return t(
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
