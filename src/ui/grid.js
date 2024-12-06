// @ts-check
import { fragment, tag, text } from "../elem";
import { THEME } from "./theme";

/**
 * @type {import("../elem").H}
 */
export const viewGrid = (attr, children) => {
  return fragment([
    viewGridStyles(),
    tag(
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
          "align-items": "stretch",
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
  return tag(
    "div",
    {
      ...attr,
      class: "grid-item",
      style: {
        padding: "12px",
        "box-sizing": "border-box",
        // flex: "1 1 auto", // Allow items to grow and shrink
        display: "flex", // Make the grid item a flex container
        "flex-direction": "column", // Stack content vertically
      },
    },
    children
  );
};

export const viewGridStyles = () => {
  return tag("style", {}, [
    text(
      `
      .grid-item {
        min-height: 100%; 
      }

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
