import { data } from "src/content/index.js";
import { viewButton } from "src/ui/button.js";
import { github } from "src/ui/icons.js";

/**
 *
 * @type {import("src/library/html/index.js").ViewWithProps<{}>}
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
