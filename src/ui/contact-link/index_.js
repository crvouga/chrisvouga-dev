// @ts-check
import { viewContactLinkButton } from "./button_";

/**
 * @type {import("../../core/elem").ViewWithProps<{label:string, value:string}>}
 */
export const viewContactLink = (props) => (a, c) => {
  return viewContactLinkButton(props)(a, c);
};
