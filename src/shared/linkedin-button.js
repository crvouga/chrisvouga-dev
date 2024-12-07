import { data } from "../content";
import { viewButton } from "../ui/button";
import { linkedIn } from "../ui/icons";

/**
 *
 * @type {import("../library/html").ViewWithProps<{}>}
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
