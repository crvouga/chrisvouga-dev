import { data } from "src/content/index.js";
import { viewButton } from "src/ui/button.js";
import { linkedIn } from "src/ui/icons.js";

/**
 *
 * @type {import("src/library/html/index.js").ViewWithProps<{}>}
 */
export const viewLinkedInButton = () => () => {
  return viewButton({
    tag: "a",
    variant: "soft",
    size: "lg",
    disabled: false,
    startDecorator: linkedIn,
    text: "LinkedIn",
  })({
    target: "_blank",
    rel: "noreferrer noopener",
    href: data.Linkedin.url,
  });
};
