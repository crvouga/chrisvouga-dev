// @ts-check
import { tag } from "../../elem";
import { viewTypography } from "../../ui/typography";
import { viewColored } from "./colored_";
import { viewHeadingContact } from "./contact_";

/**
 * @type {import("../../elem").H}
 */
export const viewHeadingSection = () => {
  return tag("heading", {}, [
    tag("div", { style: { flex: 1 } }, [
      viewTypography({ level: "h1", text: "Chris Vouga" })({
        style: { "font-weight": 900 },
      }),
      viewColored({ text: "Software Developer" })(),
    ]),
    viewHeadingContact({})(),
  ]);
};
