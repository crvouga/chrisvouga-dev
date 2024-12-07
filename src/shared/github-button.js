import { data } from "src/content";
import { viewButton } from "src/ui/button";
import { github } from "src/ui/icons";

/**
 *
 * @type {import("src/library/html").ViewWithProps<{}>}
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
