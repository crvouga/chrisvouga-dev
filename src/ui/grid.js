// @ts-check

import { THEME } from "./theme";

/**
 *
 * @param {{children:string}} props
 * @returns {string}
 */
export const viewGrid = (props) => {
  return `
    ${viewGridStyles()}
    <div style="display: flex; flex-wrap: wrap;">
        ${props.children}
    </div>
  `;
};

/**
 *
 * @param {{children:string,}} props
 * @returns {string}
 */
export const viewGridItem = (props) => {
  return `
    <div class="grid-item" style="height: 100%">
        <div style="height: 100%; padding: 12px">
          ${props.children}
        </div>
    </div>
  `;
};

export const viewGridStyles = () => {
  return `
    <style>      
    @media (min-width: ${THEME.breakpoints.xs}) {
      .grid-item {
        width: 100%;
      }
    }

    @media (min-width: ${THEME.breakpoints.sm}) {
      .grid-item {
        width: 50%;
      }
    }

    @media (min-width: ${THEME.breakpoints.md}) {
      .grid-item {
        width: 33.33%;
      }
    }

    </style>
  `;
};
