import { t, text } from ".";
import { assertEquals } from "../test";

/**
 *
 * @param {import(".").Elem} elem
 * @returns {string}
 */
export const render = (elem) => {
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
  const childrenString = elem.children.map(render).join("");
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
  return elem.children.map(render).join("");
};

/**
 * @param {Record<string, unknown>} attrs
 * @returns {string}
 */
const renderAttrs = (attrs) => {
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
      if (typeof value === "string" || typeof value === "number") {
        return [`${key}: ${value}`];
      }
      return [];
    })
    .join("; ");
};

/**
 *
 * @param {unknown} value
 * @returns {value is Record<string, unknown>}
 */
const isRecord = (value) => {
  return typeof value === "object" && value !== null;
};

assertEquals(render(t("div")), "<div></div>", "Test 1");
assertEquals(render(t("div", {})), "<div></div>", "Test 1");
assertEquals(render(t("div", {}, [])), "<div></div>", "Test 1");
assertEquals(
  render(t("div", {}, [text("hello")])),
  "<div>hello</div>",
  "Test 1"
);
assertEquals(renderStyles({ padding: "16px" }), "padding: 16px", "Test 2");
assertEquals(
  renderStyles({ padding: "16px", color: "blue" }),
  "padding: 16px; color: blue",
  "Test 2"
);
