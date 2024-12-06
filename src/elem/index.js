// @ts-check

/**
 * @typedef {Record<string, string | number | Record<string, unknown>>} Attrs
 */

/**
 * @typedef {{ t: "tag"; tagName: string; attrs: Attrs; children: Elem[] }} Tag
 */

/**
 * @typedef {{ t: "text"; text: string }} Text
 */

/**
 * @typedef {{ t: "fragment"; children: Elem[] }} Fragment
 */

/**
 * @typedef {Tag | Text | Fragment} Elem
 */

/**
 * @typedef {(attr?: Attrs, children?: Elem[]) => Elem} H
 */

/**
 * @template Props
 * @typedef {(props: Props) => H} View
 */

/**
 * @type {(tagName:string, attr?: Attrs, children?: Elem[]) => Elem}
 */
export const t = (tagName, attrs, children) => {
  return {
    t: "tag",
    tagName,
    attrs: attrs ?? {},
    children: children ?? [],
  };
};

/**
 *
 * @param {string} text
 * @returns {Elem}
 */
export const text = (text) => {
  return {
    t: "text",
    text,
  };
};

/**
 *
 * @param {Elem[]} children
 * @returns {Elem}
 */
export const fragment = (children) => {
  return {
    t: "fragment",
    children,
  };
};

/**
 *
 * @param {null | undefined | string | number | Record<string, unknown>} attrValue
 * @returns {Record<string, unknown>}
 */
export const ensureObject = (attrValue) => {
  if (typeof attrValue === "object") {
    return attrValue ?? {};
  }
  return {};
};

/**
 * @template T
 * @param {T} attrValue
 * @returns {T[]}
 */
export const ensureArray = (attrValue) => {
  if (Array.isArray(attrValue)) {
    return attrValue;
  }
  return [];
};
