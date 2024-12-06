// @ts-check

import { fragment, t, text } from "../elem";
import { THEME } from "./theme";

/**
 * @type {import("../elem").H}
 */
export const viewGrid = (attr, children) => {
  return fragment([
    viewGridStyles(),
    t(
      "div",
      {
        ...attr,
        style: {
          display: "flex",
          "flex-wrap": "wrap",
          margin: "-12px",
          "min-width": "0px",
          "box-sizing": "border-box",
          width: "100%",
          "max-width": "100%",
        },
      },
      children
    ),
  ]);
};

/**
 * @type {import("../elem").H}
 */
export const viewGridItem = (attr, children) => {
  return t(
    "div",
    {
      ...attr,
      class: "grid-item",
      style: {
        padding: "12px",
        "box-sizing": "border-box",
        height: "100%",
      },
    },
    children
  );
};

export const viewGridStyles = () => {
  return t("style", {}, [
    text(
      `
      @media (min-width: ${THEME.breakpoints.xs}) {
        .grid-item {
          width: 100%;
        }
      }
  
      @media (min-width: ${THEME.breakpoints.sm}) {
        .grid-item {
          width: 50%;
        }
      }
  
      @media (min-width: ${THEME.breakpoints.md}) {
        .grid-item {
          width: 33.33%;
        }
      }`
    ),
  ]);
};
