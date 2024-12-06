// @ts-check

import { ensureObject, t, text } from "../elem";
import { THEME } from "./theme";

/**
 * @typedef {"h1" | "h2" | "h3" | "title-sm" | "body-md"} Level
 */

/**
 * @typedef {{level: Level; text: string}} Props
 */

/**
 * @param {Props} input
 * @returns {string}
 */
const toTag = (input) => {
  switch (input.level) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "body-md":
      return "p";
    case "title-sm":
      return "h4";
  }
};

/**
 * @param {Props} input
 * @returns {Record<string, string>}
 */
const toStyle = (input) => {
  switch (input.level) {
    case "h1":
      return {
        "font-size": "36px",
        color: THEME.colors.text,
      };
    case "h2":
      return {
        "font-size": "30px",
        color: THEME.colors.text,
      };
    case "h3":
      return {
        "font-size": "24px",
        color: THEME.colors.text,
      };
    case "title-sm":
      return {
        "font-size": "18px",
        "font-weight": "normal",
        color: THEME.colors.text,
      };
    case "body-md":
      return {
        "font-size": "16px",
        "font-weight": "normal",
        color: THEME.colors.body,
      };
  }
};

const BASE_STYLE = { margin: 0, padding: 0 };

/**
 * @type {import("../elem").View<Props>}
 */
export const viewTypography = (props) => (attrs, children) => {
  const tag = toTag(props);
  const style = toStyle(props);
  return t(
    tag,
    { style: { ...BASE_STYLE, ...style, ...ensureObject(attrs?.style) } },
    [text(props.text), ...(children ?? [])]
  );
};
