import { tag, text } from "../../elem";
import { HEAD } from "../../ui/head";
import { viewTypography } from "../../ui/typography";

/**
 * @type {import("../../elem").View<{ text: string }>}
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
      background-image: linear-gradient(to bottom, #42a5f5, #1565c0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    `),
  ])
);
