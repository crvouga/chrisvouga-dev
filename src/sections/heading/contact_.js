import { data } from "../../../content";
import { tag, text } from "../../elem";
import { viewContactLink } from "../../ui/contact-link/index_";
import { HEAD } from "../../ui/head";
import { THEME, unit } from "../../ui/theme";

/**
 * @type {import("../../elem").View<{}>}
 */
export const viewHeadingContact = () => () => {
  return tag(
    "div",
    {
      class: "heading-contact",
    },
    [viewContactLink({ label: "Email", value: data.emailAddress })()]
  );
};

HEAD.push(
  tag("style", {}, [
    text(`
    .heading-contact {
      display: flex;
      flex-shrink: 0;
      gap: ${unit(2)};
    }
    @media (max-width: ${THEME.breakpoints.sm}px) {
      .heading-contact {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
    @media (min-width: ${THEME.breakpoints.md}px) {
      .heading-contact {
        justify-content: flex-end;
        align-items: center;
        flex-direction: row;
      }
    }
  `),
  ])
);
