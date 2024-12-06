import { tag, text } from "../../core/elem";
import { HEAD } from "../head";
import { THEME } from "../theme";

/**
 * @type {import("../../core/elem").ViewWithProps<{label:string, value:string}>}
 */
export const viewContactLinkButton = (props) => (attrs, _children) => {
  return tag(
    "button",
    {
      ...attrs,
      class: "contact-link-button",
      title: "Click to copy to clipboard",
      onclick: `navigator.clipboard.writeText('${props.value}')`,
    },
    [
      tag("span", { class: "contact-link-button-label" }, [text(props.label)]),
      tag("span", { class: "contact-link-button-value" }, [text(props.value)]),
    ]
  );
};

HEAD.push(
  tag("style", {}, [
    text(`
        .contact-link-button {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: 14px;
        }
        .contact-link-button-label {
            color: ${THEME.colors.neutralMuted};
        }
        .contact-link-button-value {
            color: ${THEME.colors.neutral};
        }
        .contact-link-button:hover .contact-link-button-value {
            opacity: 0.8;
            text-decoration: underline;
        }
        `),
  ])
);
