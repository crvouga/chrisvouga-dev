import { data } from "src/content";
import { viewButton } from "src/ui/button";
import { linkedIn } from "src/ui/icons";

/**
 *
 * @type {import("src/library/html").ViewWithProps<{}>}
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
