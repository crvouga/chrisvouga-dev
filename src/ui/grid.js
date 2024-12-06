// @ts-check
import { tag, text } from "../elem";
import { HEAD } from "./head";
import { THEME } from "./theme";

/**
 * @type {import("../elem").H}
 */
export const viewGrid = (attr, children) => {
  return tag(
    "div",
    {
      ...attr,
      class: "grid",
    },
    children
  );
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
    },
    children
  );
};

/**
 *
 * @returns {import("../elem").Elem}
 */
const viewGridStyles = () => {
  return tag("style", {}, [
    text(
      `
      .grid {
        display: flex;
        flex-wrap: wrap;
        margin: -12px;
        min-width: 0px;
        box-sizing: border-box;
        align-items: stretch;
        overflow: hidden;
      }
        
      .grid-item {
        min-height: 100%; 
        padding: 12px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
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

HEAD.push(viewGridStyles());
