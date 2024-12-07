// @ts-check
import { viewContactLinkButton } from "./button";

/**
 * @type {import("src/library/html").ViewWithProps<{label:string, value:string}>}
 */
export const viewContactLink = (props) => (a, c) => {
  return viewContactLinkButton(props)(a, c);
};
