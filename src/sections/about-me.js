// @ts-check

import { data } from "src/content/index.js";
import { viewSection } from "src/shared/section.js";
import { THEME } from "src/ui/theme.js";
import { viewTypography } from "src/ui/typography.js";

/**
 * @type {import("src/library/html/index.js").View}
 */
export const viewAboutMeSection = (a, _) => {
  return viewSection({
    title: "A little bit about me...",
  })(
    {
      ...a,
      style: {
        "max-width": THEME.breakpoints.md,
      },
    },
    [viewTypography({ level: "body-md", text: data.aboutMe })()]
  );
};
