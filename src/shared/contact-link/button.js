import { tag, text } from "src/library/html";
import { HEAD } from "src/ui/head";
import { THEME } from "src/ui/theme";

/**
 * @type {import("src/library/html").ViewWithProps<{label:string, value:string}>}
 */
export const viewContactLinkButton = (props) => (attrs, _children) => {
  return tag(
    "button",
    {
      ...attrs,
      class: "contact-link-button",
      title: "Click to copy to clipboard",
      onclick: `navigator.clipboard.writeText('${props.value}'); document.getElementById('toaster').showToast('Copied ${props.value} to clipboard')`,
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
