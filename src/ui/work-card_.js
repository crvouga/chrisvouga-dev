// @ts-check

/**
 * @param {{work: import("../../content").Work}} input
 * @returns {string}
 */
export function viewWorkCard({ work }) {
  return `
    <article style="height: 100%; display: flex; flex-direction: column">
      <a target="_blank" rel="noreferrer noopener">
        <h3 style="margin-bottom: 1rem; text-decoration: underline">${work.name}</h3>
      </a>
      <h4 style="display: flex; align-items: center">${work.jobTitle}</h4>
      <h4 style="display: flex; align-items: center; margin-bottom: 2rem">${work.yearStart} - ${work.yearEnd}</h4>
      <p style="margin-bottom: 2rem">${work.jobDescription}</p>
    </article>
  `;
}
