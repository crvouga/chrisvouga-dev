// @ts-check

/**
 * @typedef {"h1" | "h2" | "h3" | "title-sm" | "body-md"} Level
 */

/**
 * @typedef {{level: Level; children:string; style?:string}} Props
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
 * @returns {string}
 */
const toStyle = (input) => {
  switch (input.level) {
    case "h1":
      return `font-size: 36px;`;
    case "h2":
      return `font-size: 30px`;
    case "h3":
      return `font-size: 24px;`;
    case "title-sm":
      return `font-size: 14px;`;
    case "body-md":
      return `font-size: 16px;`;
  }
};

const BASE_STYLE = `margin: 0; padding: 0;`;

/**
 *
 * @param {Props} input
 * @returns {string}
 */
export const viewTypography = (input) => {
  const tag = toTag(input);
  const style = toStyle(input);
  const styleFinal = `${BASE_STYLE} ${style} ${input.style || ""}`;
  return `
        <${tag} style="${styleFinal}">
            ${input.children}
        </${tag}>
    `;
};
