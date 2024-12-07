// @ts-check

import { data } from "src/content";
import { viewSection } from "src/shared/section";
import { THEME } from "src/ui/theme";
import { viewTypography } from "src/ui/typography";

/**
 * @type {import("src/library/html").View}
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
