import { data } from "../../content";
import { github } from "./icons";

/**
 *
 * @returns {string}
 */
export function viewGithubButton() {
  return `
    <a
      role="button"
      data-button-variant="soft"
      data-button-size="lg"
      target="_blank"
      rel="noreferrer noopener"
      href="${data.Github.url}"
    >
      ${github()}
      LinkedIn
    </a>
  `;
}
