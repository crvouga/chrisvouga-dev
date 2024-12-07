import { data } from "../content";
import { tag, text } from "../core/elem";
import { viewContactLink } from "../shared/contact-link";
import { viewGithubButton } from "../shared/github-button";
import { HEAD } from "../ui/head";
import { viewLinkedInButton } from "../shared/linkedin-button";
import { viewSection } from "../shared/section";
import { THEME, unit } from "../ui/theme";

/**
 * @type {import("../core/elem").View}
 */
export const viewContactSection = (_a, _c) => {
  return viewSection({
    title: "Let's get in touch",
  })({ class: "contact-section" }, [viewContacts()]);
};

/**
 * @type {import("../core/elem").View}
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
 * @type {import("../core/elem").View}
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
 * @type {import("../core/elem").View}
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
