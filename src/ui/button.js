// @ts-check

import { ensureObject, fragment, tag, text } from "../elem";
import { THEME } from "./theme";

/**
 * @typedef {"h1" | "h2" | "h3" | "title-sm" | "body-md" | "body-xs"} Level
 */

/**
 * @typedef {{tag:string; startDecorator: import("../elem").H, variant: "soft" | "plain"; disabled: boolean; text: string}} Props
 */

/**
 * @param {Props} input
 * @returns {string}
 */
const toTag = (input) => {
  return input.tag;
};

/**
 * @param {Props} input
 * @returns {Record<string, string>}
 */
const toStyle = (input) => {
  switch (input.variant) {
    case "soft":
      return {};
    case "plain":
      return {};
  }
};

const BASE_STYLE = {};

/**
 *
 * @param {Props} props
 * @returns {string}
 */
const toClassName = (props) => {
  switch (props.variant) {
    case "soft":
      return "btn btn-soft";
    case "plain":
      return "btn btn-plain";
  }
};

/**
 * @type {import("../elem").View<Props>}
 */
export const viewButton = (props) => (attrs, children) => {
  const tagName = toTag(props);
  const style = toStyle(props);
  return fragment([
    viewButtonStyles(props)(),
    tag(
      tagName,
      {
        class: toClassName(props),
        "aria-role": "button",
        style: {
          ...BASE_STYLE,
          ...style,
          ...ensureObject(attrs?.style),
        },
      },
      [
        props.startDecorator({
          style: {
            width: "20px",
            height: "20px",
            "margin-left": "-4px",
            "margin-right": "8px",
          },
        }),
        text(props.text),
        ...(children ?? []),
      ]
    ),
  ]);
};

/**
 * @type {import("../elem").View<Props>}
 */
export const viewButtonStyles = (_props) => (_attrs, _children) => {
  return tag("style", {}, [
    text(`
      .btn {
        user-select: none;
        transition: background-color 0.2s, color 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 6px 16px;
        font-size: 14px;
        line-height: 21px;
        border-radius: 3.5px;
        cursor: pointer;
      }
      .btn-soft {
        background-color: ${THEME.colors.softBackground};
        color: ${THEME.colors.softText};
        fill: ${THEME.colors.softText};
      }

      .btn-soft:hover {
        background-color: ${THEME.colors.softBackgroundHover};
        color: ${THEME.colors.softTextHover};
        fill: ${THEME.colors.softTextHover};
      }

      .btn-soft:active {
        background-color: ${THEME.colors.softBackgroundActive};
        color: ${THEME.colors.softTextActive};
        fill: ${THEME.colors.softTextActive};
      }

      .btn-plain {
        background-color: ${THEME.colors.plainBackground};
        color: ${THEME.colors.plainText};
        fill: ${THEME.colors.plainText};
      }

      .btn-plain:hover {
        background-color: ${THEME.colors.plainBackgroundHover};
        color: ${THEME.colors.plainTextHover};
        fill: ${THEME.colors.plainTextHover};
      }

      .btn-plain:active {
        background-color: ${THEME.colors.plainBackgroundActive};
        color: ${THEME.colors.plainTextActive};
        fill: ${THEME.colors.plainTextActive};
      }


    `),
  ]);
};
