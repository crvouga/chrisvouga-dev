// @ts-check
/**
 *
 * @param {import("../props").ProjectCardProps} input
 * @returns {string}
 */
export const viewProjectCardMedia = (input) => {
  return `
    <div style="width: 100%; aspect-ratio: 16 / 9; overflow: hidden">  
        ${viewProjectCardMediaContent(input)}
    </div>
`;
};

/**
 *
 * @param {import("../props").ProjectCardProps} input
 * @returns {string}
 */
const viewProjectCardMediaContent = (input) => {
  const src = input.project?.imageSrc?.[0];
  if (src) {
    return viewProjectCardMediaImage(input);
  }
  return viewProjectCardMediaGradient(input);
};

/**
 *
 * @param {import("../props").ProjectCardProps} input
 * @returns {string}
 */
const viewProjectCardMediaImage = (input) => {
  const alt = input.project?.imageAlt;
  const src = input.project?.imageSrc?.[0] ?? " ";
  return `<img src="${src}" alt="${alt}" style="width: 100%; height: 100%" style="object-fit: cover" />`;
};

/**
 *
 * @param {import("../props").ProjectCardProps} input
 * @returns {string}
 */
const viewProjectCardMediaGradient = (input) => {
  return `
    <div style="width: 100%; height: 100%; background: linear-gradient(to right bottom, #2196f3, #8e24aa)"/> 
    `;
};
