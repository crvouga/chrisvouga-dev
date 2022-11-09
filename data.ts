const projects: Project[] = [
  {
    title: "Gamezilla",
    liveUrl: "https://gamezilla.chrisvouga.dev/",

    description: "A work in progress multiplayer gaming app.",
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
      "docker",
    ],
  },

  {
    title: "Pickflix",
    liveUrl: "https://crvouga-pickflix.herokuapp.com/",
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
    title: "Fullstack Todo App",
    liveUrl: "https://todo.chrisvouga.dev",
    codeUrl: "https://github.com/crvouga/todo",
    description: "Fullstack todo app. Sign in and start tracking things todo.",
    imageSrc: "/todo.png",
    topics: [
      "typescript",
      "vue",
      "css",
      "express",
      "javascript",
      "tailwind",
      "nodejs",
      "mongodb",
    ],
  },

  {
    title: "Screenshots as a Service",
    liveUrl: "https://screenshotservice.chrisvouga.dev",
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
    liveUrl: "https://thebandalibi.chrisvouga.dev/",
    codeUrl: "https://github.com/crvouga/thebandalibi-com",
    description:
      "The official website and e-commerce store for the band alibi.",
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
    liveUrl: "https://gps-couriers-website.vercel.app/",
    description: "A marketing website for a hospice courier company.",
    imageSrc: "/courier.png",
    youTubeVideoId: "kFwPTJcM6I0",
    topics: ["css", "material-ui", "nextjs", "react", "typescript"],
  },

  {
    title: "Multiplayer Connect Four",
    liveUrl: "https://connectfour.chrisvouga.dev/",
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
    liveUrl: "https://snake.chrisvouga.dev/",
    codeUrl: "https://github.com/crvouga/snake",
    description:
      "Pure functional implementation of the classic game Snake with smooth snake movement",
    imageSrc: "/snake.png",
    youTubeVideoId: "7El3RdkzlHs",
    topics: ["css", "javascript", "ramda", "react"],
  },

  {
    title: "Match Three",
    liveUrl: "https://matchthree.chrisvouga.dev/",
    codeUrl: "https://github.com/crvouga/match-three",
    description: "Match Three is a Candy Crush type game",
    imageSrc: "/match-three.png",
    youTubeVideoId: "VBrlDgmXSoA",
    topics: ["css", "javascript", "ramda", "react", "redux", "redux-saga"],
  },

  {
    title: "Cheese",
    liveUrl: "https://cheese.chrisvouga.dev/",
    codeUrl: "https://github.com/crvouga/cheese",
    description: "Cheese is an app that lets people make fake GCU ids.",
    imageSrc: "/cheese.png",
    youTubeVideoId: "hv3tRBHF7w4",
    topics: ["css", "typescript", "material-ui", "react", "firebase"],
  },

  {
    title: "Simon Says",
    liveUrl: "https://simonsays.chrisvouga.dev/",
    codeUrl: "https://github.com/crvouga/simon-says",
    description: "An implementation of the classic memory game Simon Says.",
    imageSrc: "/simon-says.png",
    youTubeVideoId: "WrUFzlKL0E0",
    topics: ["css", "javascript", "ramda", "react", "redux", "redux-saga"],
  },
];

const aboutMe = `
    I'm a programmer living in the Phoenix Valley. 
    I graduated from ASU with a Bachelor's degree in Mathematics. 
    My go to style of programming is the functional paradigm. 
    Right now, I'm focused on web development, but I'll learn whatever is thrown at me.
    A random fact about me is that I play the drums in a band.
  `;

export const data = {
  screenshotServiceProjectId: "3e158ff9-0b37-41d1-84d0-cae1397adf4b",

  metaTitle: "Chris Vouga • Web Developer",

  metaDescription: aboutMe,

  emailAddress: "crvouga@gmail.com",

  Github: {
    url: "https://github.com/crvouga",
  },

  Linkedin: {
    url: "https://www.linkedin.com/in/chris-vouga",
  },

  aboutMe,

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
  docker: "/docker-icon.svg",
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
  vue: "/vue.svg",
  tailwind: "/tailwindcss.svg",
  mongodb: "/mongodb-icon.svg",
};

export type Topic = keyof typeof topicToImageSrc;

export function topics(topics: Topic[]): Topic[] {
  return topics;
}

type Project = {
  title: string;
  liveUrl?: string;
  codeUrl?: string;
  storybookUrl?: string;
  description: string;
  imageSrc: string;
  youTubeVideoId?: string;
  topics: Topic[];
};
