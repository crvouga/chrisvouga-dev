import { data } from "src/content";
import { tag, text } from "src/library/html";
import { viewContactLink } from "src/shared/contact-link";
import { viewGithubButton } from "src/shared/github-button";
import { HEAD } from "src/ui/head";
import { viewLinkedInButton } from "src/shared/linkedin-button";
import { viewSection } from "src/shared/section";
import { THEME, unit } from "src/ui/theme";

/**
 * @type {import("src/library/html").View}
 */
export const viewContactSection = (_a, _c) => {
  return viewSection({
    title: "Let's get in touch",
  })({ class: "contact-section" }, [viewContacts()]);
};

/**
 * @type {import("src/library/html").View}
 */
const viewContacts = (_a, _c) => {
  return tag(
    "div",
    {
      class: "contact-section-content",
    },
    [viewContactLinks(), viewContactButtons()]
  );
};

HEAD.push(
  tag("style", {}, [
    text(`
    .contact-section-content {
      display: flex;
      flex-direction: column;
      gap: ${unit(4)};
      max-width: ${THEME.breakpoints.sm};
      flex-wrap: wrap;
      overflow: hidden;
    }
    @media (min-width: ${THEME.breakpoints.xs}) {
      .contact-section-content {
        flex-direction: row;
      }
    }
    @media (min-width: ${THEME.breakpoints.md}) {
      .contact-section-content {
        flex-direction: column;
      }
    }
    
  `),
  ])
);

/**
 * @type {import("src/library/html").View}
 */
const viewContactLinks = (_a, _c) => {
  return tag("div", { class: "contact-section-links" }, [
    viewContactLink({
      label: "Email",
      value: data.emailAddress,
    })(),
  ]);
};

HEAD.push(
  tag("style", {}, [
    text(`
    .contact-section-links {
      display: flex;
      align-items: center;
      gap: ${unit(2)};
    }
  `),
  ])
);

/**
 * @type {import("src/library/html").View}
 */
const viewContactButtons = (_a, _c) => {
  return tag("div", { class: "contact-section-buttons" }, [
    viewGithubButton({})(),
    viewLinkedInButton({})(),
  ]);
};

HEAD.push(
  tag("style", {}, [
    text(`
    .contact-section-buttons {
      display: flex;
      align-items: center;
      gap: ${unit(2)};
    }
  `),
  ])
);
