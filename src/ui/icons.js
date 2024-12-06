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
 * @type {(attrs: import("../elem").Attrs | undefined, svg: string) => import("../elem").Elem}
 */
const icon = (attrs, svg) => {
  return text(svg.replace("<svg ", `<svg ${renderAttrs(attrs ?? {})} `));
};

/**
 * @type {import("../elem").H}
 */
export const infoOutline = (attrs, _) => {
  return icon(
    attrs,
    `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path></svg>`
  );
};

/**
 * @type {import("../elem").H}
 */
export const web = (attrs, _children) => {
  return icon(
    attrs,
    `<svg  aria-hidden="true" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-5 14H4v-4h11zm0-5H4V9h11zm5 5h-4V9h4z"></path></svg>`
  );
};

/**
 * @type {import("../elem").H}
 */
export const code = (attrs, _children) => {
  return icon(
    attrs,
    `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"></path></svg>`
  );
};
