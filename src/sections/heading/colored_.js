import { viewTypography } from "../../ui/typography";

const style = {
  "font-weight": "1000",
  "padding-bottom": "0.5rem",
  color: "transparent",
  "background-image": "linear-gradient(to bottom, #42a5f5, #1565c0)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};

/**
 * @type {import("../../elem").View<{ text: string }>}
 */
export const viewColored =
  ({ text }) =>
  (_a, _c) => {
    return viewTypography({ level: "h2", text })({
      style,
    });
  };
