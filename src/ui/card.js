// @ts-check

import { tag, text } from "src/library/html";
import { HEAD } from "./head";
import { THEME, unit } from "./theme";

/**
 * @type {import("src/library/html").View}
 */
export const viewCard = (attr, children) => {
  return tag("article", { ...attr, class: "card" }, children);
};

HEAD.push(
  tag("style", {}, [
    text(
      `
      .card {
        display: flex;
        flex-direction: column;
        background-color: ${THEME.colors.paper};
        border: 1px solid ${THEME.colors.paperBorder};
        border-radius: 8px;
        overflow: hidden;
        height: 100%;
      }
      `
    ),
  ])
);

/**
 * @type {import("src/library/html").View}
 */
export const viewCardContent = (attrs, children) => {
  return tag("div", { ...attrs, class: "card-content" }, children);
};

HEAD.push(
  tag("style", {}, [
    text(
      `
      .card-content {
        padding: 16px;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      `
    ),
  ])
);

/**
 * @type {import("src/library/html").View}
 */
export const viewCardActions = (attrs, children) => {
  return tag("div", { ...attrs, class: "card-actions" }, children);
};

HEAD.push(
  tag("style", {}, [
    text(
      `
      .card-actions {
        display: flex;
        padding-top: ${unit(2)};
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: ${unit(3)};
      }
      `
    ),
  ])
);
