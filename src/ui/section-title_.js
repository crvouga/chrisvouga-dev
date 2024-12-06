// @ts-check

/**
 * @param {{title:string}} param0
 * @returns {string}
 */
export function viewSectionTitle({ title }) {
  return `
    <h2 style="font-weight: 900; padding-bottom: 3rem; text-align: left">
      ${title}
    </h2>
  `;
}
