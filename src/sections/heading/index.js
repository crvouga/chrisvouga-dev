// @ts-check
import { tag, text } from "src/library/html";
import { HEAD } from "src/ui/head";
import { THEME, unit } from "src/ui/theme";
import { viewHeadingContact } from "./contact";
import { viewHeadingSectionText } from "./text";

/**
 * @type {import("src/library/html").View}
 */
export const viewHeadingSection = () => {
  return tag(
    "header",
    {
      class: "header",
    },
    [viewHeadingSectionText(), viewHeadingContact({})()]
  );
};

HEAD.push(
  tag("style", {}, [
    text(`
    .header {
      display: flex;
      justify-content: space-between;
      max-width: 100%;
      flex-direction: column;
      gap: ${unit(2)};
    }

    @media (max-width: ${THEME.breakpoints.xs}) {
      .header {
        flex-direction: column;
        align-items: flex-start;
        gap: ${unit(2)};
      }
    }

    @media (min-width: ${THEME.breakpoints.sm}) {
      .header {
        flex-direction: row;
        align-items: flex-end;
        gap: ${unit(2)};
      }
    }

    @media (min-width: ${THEME.breakpoints.md}) {
      .header {
        gap: ${unit(4)};
      }
    }
    `),
  ])
);
