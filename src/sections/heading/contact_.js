import { data } from "../../../content";
import { tag, text } from "../../elem";
import { viewContactLink } from "../../ui/contact-link/index_";
import { viewGithubButton } from "../../ui/github-button_";
import { HEAD } from "../../ui/head";
import { viewLinkedInButton } from "../../ui/linkedin-button_";
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
    [
      viewContactLink({ label: "Email", value: data.emailAddress })(),
      tag(
        "div",
        {
          class: "heading-contact",
        },
        [viewGithubButton({})(), viewLinkedInButton({})()]
      ),
    ]
  );
};

HEAD.push(
  tag("style", {}, [
    text(`
    .heading-contact {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      gap: ${unit(2)};
      height: 100%;
      align-items: flex-start;
      justify-content: center;
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
    .heading-contact {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      flex-shrink: 0;
      gap: ${unit(2)};
    }
  `),
  ])
);
