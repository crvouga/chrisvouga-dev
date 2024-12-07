import { tag, text } from "src/library/html";
import { HEAD } from "src/ui/head";
import { THEME } from "src/ui/theme";
import { viewTypography } from "src/ui/typography";

/**
 * @type {import("src/library/html").ViewWithProps<{ text: string }>}
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
      padding-bottom: 0.5rem;
      color: transparent;
      background-image: linear-gradient(${THEME.colors.primary300}, ${THEME.colors.primary500});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    `),
  ])
);
