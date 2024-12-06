// @ts-check

import { THEME } from "./theme";

/**
 * @param {{children:string}} input
 * @returns {string}
 */
export function viewCard(input) {
  return `
    <article style="display: flex; flex-direction: column; background-color: ${THEME.paper}; border: 1px solid ${THEME.paperBorder}; border-radius: 8px">
      ${input.children}
    </article>
  `;
}

/**
 *
 * @param {{children:string}} props
 * @returns
 */
export const viewCardContent = (props) => {
  return `
        <div style="padding: 16px;">
            ${props.children}
        </div>
    `;
};
