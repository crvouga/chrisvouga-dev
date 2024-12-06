import { data } from "../../content";
import { linkedIn } from "./icons";

/**
 *
 * @returns {string}
 */
export function viewLinkedInButton() {
  return `
    <a
      role="button"
      data-button-variant="soft"
      data-button-size="lg"
      target="_blank"
      rel="noreferrer noopener"
      href="${data.Linkedin.url}"
    >
      ${linkedIn()}
      LinkedIn
    </a>
  `;
}
