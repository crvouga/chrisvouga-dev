import { data } from "../content";
import { viewButton } from "../ui/button";
import { github } from "../ui/icons";

/**
 *
 * @type {import("../library/html").ViewWithProps<{}>}
 */
export const viewGithubButton = () => () => {
  return viewButton({
    tag: "a",
    variant: "soft",
    size: "lg",
    disabled: false,
    startDecorator: github,
    text: "GitHub",
  })({
    target: "_blank",
    rel: "noreferrer noopener",
    href: data.Github.url,
  });
};
