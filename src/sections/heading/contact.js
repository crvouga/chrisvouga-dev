import { data } from "src/content";
import { tag, text } from "src/library/html";
import { viewContactLink } from "src/shared/contact-link";
import { viewGithubButton } from "src/shared/github-button";
import { HEAD } from "src/ui/head";
import { viewLinkedInButton } from "src/shared/linkedin-button";
import { THEME, unit } from "src/ui/theme";

/**
 * @type {import("src/library/html").ViewWithProps<{}>}
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
          class: "heading-contact-button",
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
      gap: ${unit(3)};
      height: 100%;
      flex: 1;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    
    @media (max-width: ${THEME.breakpoints.sm}) {
      .heading-contact {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
    @media (min-width: ${THEME.breakpoints.md}) {
      .heading-contact {
        justify-content: flex-end;
        align-items: center;
        flex-direction: row;
      }
    }
    .heading-contact-button {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      flex-shrink: 0;
      gap: ${unit(2)};
    }
  `),
  ])
);
