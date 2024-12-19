// @ts-check
import { viewContactLinkButton } from "./button.js";

/**
 * @type {import("src/library/html/index.js").ViewWithProps<{label:string, value:string}>}
 */
export const viewContactLink = (props) => (a, c) => {
  return viewContactLinkButton(props)(a, c);
};
