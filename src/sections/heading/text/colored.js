import { tag, text } from "src/library/html/index.js";
import { HEAD } from "src/ui/head.js";
import { THEME } from "src/ui/theme.js";
import { viewTypography } from "src/ui/typography.js";

/**
 * @type {import("src/library/html/index.js").ViewWithProps<{ text: string }>}
 */
export const viewColored =
  ({ text }) =>
  (a, _c) => {
    return viewTypography({ level: "h2", text })({
      ...a,
      class: "colored",
    });
  };

HEAD.push(
  tag("style", {}, [
    text(`
    
    .colored {
      font-weight: 1000;
      color: transparent;
      background-image: linear-gradient(${THEME.colors.primary300}, ${THEME.colors.primary500});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    `),
  ])
);
