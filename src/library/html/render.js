import { isRecord } from "src/library/is-record";
import { assertEquals } from "src/library/test";
import { tag, text } from ".";

/**
 *
 * @param {import(".").Html} elem
 * @returns {string}
 */
export const render = (elem) => {
  return prependDocType(renderMain(elem));
};

/**
 *
 * @param {string} html
 * @returns {string}
 */
const prependDocType = (html) => {
  return `<!DOCTYPE html>${html}`;
};

/**
 *
 * @param {import(".").Html} elem
 * @returns {string}
 */
const renderMain = (elem) => {
  switch (elem.t) {
    case "tag":
      return renderTag(elem);
    case "text":
      return renderText(elem);
    case "fragment":
      return renderFragment(elem);
  }
};

/**
 *
 * @param {import(".").Tag} elem
 */
const renderTag = (elem) => {
  const attrsString = renderAttrs(elem.attrs);
  const childrenString = elem.children.map(renderMain).join("");
  const leadingTag = `${elem.tagName} ${attrsString}`.trim();
  return `<${leadingTag}>${childrenString}</${elem.tagName}>`;
};

/**
 * @param {import(".").Text} elem
 */
const renderText = (elem) => {
  return elem.text;
};

/**
 * @param {import(".").Fragment} elem
 */
const renderFragment = (elem) => {
  return elem.children.map(renderMain).join("");
};

/**
 * @param {Record<string, unknown>} attrs
 * @returns {string}
 */
export const renderAttrs = (attrs) => {
  return Object.keys(attrs)
    .flatMap((key) => {
      const value = attrs[key];

      if (key === "style" && isRecord(value)) {
        return `${key}="${renderStyles(value)}"`;
      }

      if (typeof value === "string" || value === "number") {
        return `${key}="${value}"`;
      }

      return `${key}="${attrs[key]}"`;
    })
    .join(" ");
};

/**
 *
 * @param {Record<string, unknown>} styles
 * @returns {string}
 */
const renderStyles = (styles) => {
  return Object.entries(styles)
    .flatMap(([key, value]) => {
      if (key.trim().length === 0) {
        return [];
      }
      if (typeof value === "string" && value.trim().length > 0) {
        return [`${key.trim()}: ${value.trim()}`];
      }
      if (typeof value === "number") {
        return [`${key.trim()}: ${value}`];
      }
      return [];
    })
    .join("; ");
};

assertEquals(renderMain(tag("div")), "<div></div>", "Test 1");
assertEquals(renderMain(tag("div", {})), "<div></div>", "Test 1");
assertEquals(renderMain(tag("div", {}, [])), "<div></div>", "Test 1");
assertEquals(
  renderMain(tag("div", {}, [text("hello")])),
  "<div>hello</div>",
  "Test 1"
);
assertEquals(renderStyles({ padding: "16px" }), "padding: 16px", "Test 2");
assertEquals(renderStyles({ padding: "" }), "", "Test 2");
assertEquals(renderStyles({ padding: undefined }), "", "Test 2");
assertEquals(
  renderStyles({ padding: "16px", color: "blue" }),
  "padding: 16px; color: blue",
  "Test 2"
);
