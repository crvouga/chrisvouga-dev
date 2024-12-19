import { data } from "src/content/index.js";
import { tag, text } from "src/library/html/index.js";
import { viewLink } from "src/ui/link.js";
import { THEME, unit } from "src/ui/theme.js";

/**
 * @type {import("src/library/html/index.js").View}
 */
export const viewFooterSection = () => {
  return tag(
    "footer",
    {
      style: {
        width: "100%",
        padding: `${unit(8)} 0`,
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
      },
    },
    [
      viewLink(
        {
          target: "_blank",
          rel: "noopener noreferrer",
          href: data.siteSourceCodeUrl,
          style: {
            color: THEME.colors.neutralMuted,
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
            gap: unit(1),
          },
        },
        [text("Source code")]
      ),
    ]
  );
};
