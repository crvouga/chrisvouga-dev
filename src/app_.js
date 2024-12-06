// @ts-check

import { data } from "../content";
import { tag, text } from "./elem";
import { viewHeadingSection } from "./sections/heading/index_";
import { viewSideProjects } from "./sections/side-projects/index_";
import { viewWorkProjectsSection } from "./sections/work-projects_";
import { viewWorkSection } from "./sections/work_";
import { HEAD } from "./ui/head";
import { THEME } from "./ui/theme";

/**
 * @returns {import("./elem").Elem}
 */
export const viewApp = () => {
  return viewDoc({}, [
    tag(
      "main",
      {
        style: {
          width: "min(100%, 1150px)",
          margin: "auto",
          display: "flex",
          "align-items": "items-center",
          "flex-direction": "column",
          gap: "72px",
          padding: "72px 12px",
          overflow: "hidden",
        },
      },
      [
        viewHeadingSection(),
        viewWorkSection(),
        viewWorkProjectsSection(),
        viewSideProjects(),
      ]
    ),
  ]);
};

/**
 * @type {import("./elem").H}
 */
export const viewDoc = (_a, c) => {
  return tag("html", { lang: "en" }, [
    tag("head", {}, [
      tag("meta", { charset: "UTF-8" }, []),
      tag(
        "meta",
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        []
      ),
      tag("title", {}, [text(data.metaTitle)]),
      tag("meta", { name: "description", content: data.metaDescription }, []),
      tag("link", { rel: "shortcut icon", href: "/favicon.ico" }, []),
      tag("link", { rel: "icon", href: "/favicon.ico" }, []),
      tag("style", {}, [
        text(
          `* { font-family: Inter, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; color: ${THEME.colors.text};}`
        ),
      ]),
      ...HEAD,
    ]),
    tag("body", { style: { "background-color": "#000" } }, c),
  ]);
};
