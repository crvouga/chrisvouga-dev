// @ts-check

import { data } from "../content";
import { tag, text } from "./core/elem";
import { viewAboutMeSection } from "./sections/about-me_";
import { viewHeadingSection } from "./sections/heading/index_";
import { viewSideProjectsSection } from "./sections/side-projects/index_";
import { viewWorkProjectsSection } from "./sections/work-projects_";
import { viewWorkSection } from "./sections/work_";
import { HEAD } from "./ui/head";
import { THEME } from "./ui/theme";

/**
 * @returns {import("./core/elem").Elem}
 */
export const viewApp = () => {
  return viewDoc({}, [
    tag("main", { class: "main" }, [
      viewHeadingSection(),
      viewWorkSection(),
      viewWorkProjectsSection(),
      viewSideProjectsSection(),
      viewAboutMeSection(),
    ]),
  ]);
};

HEAD.push(
  tag("style", {}, [
    text(`
    .main {
      max-width: 1150px;      
      margin: auto;
      display: flex;
      align-items: items-center;
      flex-direction: column;
      gap: 72px;
      padding: 72px 12px;
      overflow-x: hidden;
    }
  `),
  ])
);

/**
 * @type {import("./core/elem").View}
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
      ...HEAD,
    ]),
    tag("body", {}, c),
  ]);
};

HEAD.push(
  tag("style", {}, [
    text(`
    * { 
      font-family: Inter, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; 
      color: ${THEME.colors.text};
    }
    body {
      margin: 0;
      padding: 0;
      background-color: #000;
      overflow-x: hidden;
      overflow-y: auto;
    }
  `),
  ])
);
