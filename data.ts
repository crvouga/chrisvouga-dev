const projects: Project[] = [
  {
    title: "Gamezilla",
    url: "https://gamezilla.chrisvouga.dev/",
    description:
      "A work in progress multiplayer gaming app. Source code is private",
    imageSrc: "/gamezilla.png",
    youTubeVideoId: "VSLpdPvHbD4",
    topics: [
      "typescript",
      "material-ui",
      "react",
      "nodejs",
      "postgres",
      "supabase",
      "elm",
      "rxjs",
      "css",
      "socket-io",
    ],
  },

  {
    title: "Pickflix",
    url: "https://crvouga-pickflix.herokuapp.com/",
    codeUrl: "https://github.com/crvouga/pickflix",
    description:
      "Watch trailers, write reviews and make movie lists with your friends",
    imageSrc: "/pickflix.png",
    youTubeVideoId: "-atthbuMFIM",
    topics: [
      "express",
      "heroku",
      "jest",
      "material-ui",
      "nodejs",
      "postgres",
      "ramda",
      "react",
      "redux",
      "redux-saga",
      "typescript",
      "css",
      "react-query",
    ],
  },

  {
    title: "Screenshots as a Service",
    url: "https://screenshotservice.chrisvouga.dev",
    codeUrl: "https://github.com/crvouga/screenshot-service",
    description:
      "A software as a service app that lets developers generate screenshots for their websites. It was used for this website.",
    imageSrc: "/screenshot-service.png",
    youTubeVideoId: "lCEzYGJ0rN8",
    topics: [
      "css",
      "heroku",
      "material-ui",
      "nodejs",
      "postgres",
      "puppeteer",
      "react",
      "react-query",
      "typescript",
      "supabase",
    ],
  },

  {
    title: "Band Website with E-commerce",
    url: "https://thebandalibi.chrisvouga.dev/",
    codeUrl: "https://github.com/crvouga/thebandalibi-com",
    description: "Official website and e-commerce store for the band alibi.",
    imageSrc: "/band.png",
    youTubeVideoId: "vChYAGXsLuI",
    topics: [
      "css",
      "firebase",
      "material-ui",
      "nextjs",
      "react-query",
      "react",
      "sanity",
      "shopify",
      "typescript",
    ],
  },

  {
    title: "Courier Company Website",
    url: "https://gps-couriers-website.vercel.app/",
    description:
      "Website for a hospice courier company. Source code is private",
    imageSrc: "/courier.png",
    youTubeVideoId: "kFwPTJcM6I0",
    topics: ["css", "material-ui", "nextjs", "react", "typescript"],
  },

  {
    title: "Multiplayer Connect Four",
    url: "https://connectfour.chrisvouga.dev/",
    codeUrl: "https://github.com/crvouga/connect-four",
    description: "Play the game Connect Four online with your friends",
    imageSrc: "/connect-four.png",
    youTubeVideoId: "9_TbyftkaQw",
    topics: [
      "css",
      "greensock",
      "heroku",
      "material-ui",
      "nodejs",
      "ramda",
      "redux",
      "redux-saga",
      "javascript",
      "socket-io",
    ],
  },

  {
    title: "Smooth Snake Game",
    url: "https://snake.chrisvouga.dev/",
    codeUrl: "https://github.com/crvouga/snake",
    description:
      "Pure functional implementation of the classic game Snake with smooth snake movement",
    imageSrc: "/snake.png",
    youTubeVideoId: "7El3RdkzlHs",
    topics: ["css", "javascript", "ramda", "react"],
  },

  {
    title: "Match Three",
    url: "https://matchthree.chrisvouga.dev/",
    codeUrl: "https://github.com/crvouga/match-three",
    description: "Match Three is a Candy Crush type game",
    imageSrc: "/match-three.png",
    youTubeVideoId: "VBrlDgmXSoA",
    topics: ["css", "javascript", "ramda", "react", "redux", "redux-saga"],
  },

  {
    title: "Cheese",
    url: "https://cheese.chrisvouga.dev/",
    codeUrl: "https://github.com/crvouga/cheese",
    description: "Cheese is an app that lets people make fake GCU ids.",
    imageSrc: "/cheese.png",
    youTubeVideoId: "hv3tRBHF7w4",
    topics: ["css", "typescript", "material-ui", "react", "firebase"],
  },

  {
    title: "Simon Says",
    url: "https://simonsays.chrisvouga.dev/",
    codeUrl: "https://github.com/crvouga/simon-says",
    description: "An implementation of the classic memory game Simon Says.",
    imageSrc: "/simon-says.png",
    youTubeVideoId: "WrUFzlKL0E0",
    topics: ["css", "javascript", "ramda", "react", "redux", "redux-saga"],
  },
];

export const data = {
  screenshotServiceProjectId: "3e158ff9-0b37-41d1-84d0-cae1397adf4b",

  metaTitle: "Chris Vouga • Web Developer",

  metaDescription:
    "Hello, my name is Chris Vouga. I have achieved a Bachelors of Science from ASU and am a web developer based in the Phoenix valley.",

  emailAddress: "crvouga@gmail.com",

  Github: {
    url: "https://github.com/crvouga",
  },

  Linkedin: {
    url: "https://www.linkedin.com/in/chris-vouga",
  },

  phoneNumber: "4802098698",

  projects,
};

//
//
//
// Topics
// source: https://svgporn.com/
//
//
//

export const topicToImageSrc = {
  typescript: "/typescript-icon.svg",
  heroku: "/heroku-icon.svg",
  jest: "/jest.svg",
  "redux-saga": "/redux-saga.svg",
  ramda: "/ramda.svg",
  react: "/react.svg",
  firebase: "/firebase.svg",
  supabase: "/supabase-icon.svg",
  postgres: "/postgresql.svg",
  "material-ui": "/material-ui.svg",
  nextjs: "/nextjs.svg",
  "socket-io": "/socket.io.svg",
  express: "/express.svg",
  css: "/css-3.svg",
  shopify: "/shopify.svg",
  sanity: "/sanity.svg",
  nodejs: "/nodejs-icon.svg",
  puppeteer: "/puppeteer.svg",
  redux: "/redux.svg",
  rxjs: "/rxjs.svg",
  elm: "/elm.svg",
  "react-query": "react-query-icon.svg",
  greensock: "/greensock-icon.svg",
  javascript: "/javascript.svg",
};

export type Topic = keyof typeof topicToImageSrc;

export function topics(topics: Topic[]): Topic[] {
  return topics;
}

type Project = {
  title: string;
  url: string;
  codeUrl?: string;
  description: string;
  imageSrc: string;
  youTubeVideoId: string;
  topics: Topic[];
};
