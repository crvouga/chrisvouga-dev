// @ts-check

import { tag, text } from "../core/elem";
import { HEAD } from "./head";
import { THEME } from "./theme";

/**
 * @typedef {"h1" | "h2" | "h3" | "title-sm" | "body-md" | "body-xs"} Level
 */

/**
 * @typedef {{tag:string; startDecorator: import("../core/elem").View, size: "sm" | "lg"; variant: "soft" | "plain"; disabled: boolean; text: string}} Props
 */

/**
 * @param {Props} input
 * @returns {string}
 */
const toTag = (input) => {
  return input.tag;
};

/**
 *
 * @param {Props} props
 * @returns {string}
 */
const toClassName = (props) => {
  /**
   * @type {string[]}
   */
  const classNames = [];
  classNames.push("btn");
  switch (props.variant) {
    case "soft":
      classNames.push("btn-soft");
      break;
    case "plain":
      classNames.push("btn-plain");
      break;
  }

  switch (props.size) {
    case "sm":
      classNames.push("btn-sm");
      break;
    case "lg":
      classNames.push("btn-lg");
      break;
  }

  if (props.disabled) {
    classNames.push("btn-disabled");
  }

  return classNames.join(" ");
};

/**
 * @type {import("../core/elem").ViewWithProps<Props>}
 */
export const viewButton = (props) => (attrs, children) => {
  const tagName = toTag(props);

  return tag(
    tagName,
    {
      class: toClassName(props),
      "aria-role": "button",
      "aria-disabled": props.disabled ? "true" : "false",
      disabled: props.disabled ? "true" : "false",
      ...attrs,
    },
    [
      props.startDecorator({
        class: "btn-start-decorator",
      }),
      text(props.text),
      ...(children ?? []),
    ]
  );
};

/**
 * @type {import("../core/elem").ViewWithProps<{}>}
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
        cursor: pointer;
        text-decoration: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        border: none;
        outline: none;

      }

      .btn-sm {
        padding: 6px 16px;
        font-size: 14px;
        line-height: 21px;
        border-radius: 3.5px;
      }

      .btn-start-decorator  {
        flex-shrink: 0;
        margin-right: 8px;
        margin-left: -4px;
      }

      .btn-sm > .btn-start-decorator {
        width: 20px;
        height: 20px;
      }

      .btn-lg {
        padding: 12px 24px;
        font-size: 16px;
        line-height: 24px;
        border-radius: 6px;
      }

      .btn-lg > .btn-start-decorator {
        width: 24px;
        height: 24px;
      }

      .btn.btn-disabled {
        cursor: not-allowed;
        pointer-events: none; 
      }

      .btn-soft {
        background-color: ${THEME.colors.softBackground};
        color: ${THEME.colors.softText};
        fill: ${THEME.colors.softText};
      }

      .btn-soft.btn-disabled {
        background-color: ${THEME.colors.softBackgroundDisabled};
        color: ${THEME.colors.softTextDisabled};
        fill: ${THEME.colors.softTextDisabled};
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

      .btn-plain.btn-disabled {
        background-color: ${THEME.colors.plainBackground};
        color: ${THEME.colors.plainTextDisabled};
        fill: ${THEME.colors.plainTextDisabled};
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

HEAD.push(viewButtonStyles({})());
