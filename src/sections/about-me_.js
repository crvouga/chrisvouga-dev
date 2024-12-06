// @ts-check

import { data } from "../../content";
import { viewSection } from "../ui/section";
import { THEME } from "../ui/theme";
import { viewTypography } from "../ui/typography";

/**
 * @type {import("../elem").H}
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
