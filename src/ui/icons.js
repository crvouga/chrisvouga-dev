// @ts-check

import { text } from "../elem";
import { renderAttrs } from "../elem/render";

/**
 *
 * @returns {string}
 */
export function linkedIn() {
  return ``;
}

/**
 *
 * @returns {string}
 */
export function github() {
  return ``;
}

/**
 * @type {import("../elem").H}
 */
export const infoOutline = (attrs, _children) => {
  return text(
    `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" ${renderAttrs(
      attrs ?? {}
    )}>
      <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
    </svg>`
  );
};

/**
 * @type {import("../elem").H}
 */
export const web = (attrs, _children) => {
  return text(
    `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" ${renderAttrs(
      attrs ?? {}
    )}>
      <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
    </svg>`
  );
};

/**
 * @type {import("../elem").H}
 */
export const code = (attrs, _children) => {
  return text(
    `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" ${renderAttrs(
      attrs ?? {}
    )}>
      <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
    </svg>`
  );
};
