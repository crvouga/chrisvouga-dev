// @ts-check

import { viewSectionTitle } from "./section-title_";

/**
 * @param {{title:string; children:string}} input
 * @returns {string}
 */
export function viewSection(input) {
  return `
    <section style="width: 100%; display: flex; flex-direction: column; gap: 24px;">
      ${viewSectionTitle(input)}
      ${input.children}
    </section>
  `;
}
