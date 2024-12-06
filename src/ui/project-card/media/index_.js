// @ts-check
/**
 *
 * @param {import("../props").ProjectCardProps} input
 * @returns {string}
 */
export function viewProjectCardMedia(input) {
  return `
    <div style="width: 100%; aspect-ratio: 16 / 9; ">  
        <img src="${input.project.imageSrc?.[0] ?? ""}" alt="${
    input.project?.imageAlt
  }" style="width: 100%; height: 100%" />
    </div>
`;
}
