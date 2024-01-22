const bandHref = "https://www.instagram.com/thebandalibi/";

const lamderaHref = "https://lamdera.com/";

const work: Work[] = [
  {
    name: "One Origin",
    infoUrl: "https://oneorigin.us/",
    jobTitle: "Senior Software Developer",
    jobDescription: `Working as a full-stack software developer. Guiding junior developers. Developing products for clients at ASU`,
    startDate: new Date("2022-11-01"),
    endDate: "Present",
  },
  {
    name: "Freelancing",
    jobTitle: "Frontend Developer",
    jobDescription: `Worked as a frontend developer. Primarily developed static sites for small businesses`,
    startDate: new Date("2020-01-01"),
    endDate: new Date("2022-11-01"),
  },
];

const workProjects: Project[] = [
  {
    title: "Triangulator",
    deployment: { t: "private" },
    code: { t: "private" },
    description:
      "Triangulator is a ASU product for universities to create novel course transfers between universities",
    imageSrc: "/orchard.png",
    topics: [
      "typescript",
      "vue",
      "tailwind",
      "nuxt",
      "postgres",
      "python",
      "graphql",
      "aws",
    ],
  },
  {
    title: "Study Hall",
    deployment: {
      t: "public",
      url: "https://gostudyhall.com/",
    },
    code: {
      t: "private",
    },
    description:
      "Orchard is a ASU product where teachers can create custom courses",
    imageSrc: "/orchard.png",
    topics: ["typescript", "react", "material-ui", "nextjs", "supabase"],
  },
  {
    title: "Orchard",
    code: {
      t: "private",
    },
    deployment: {
      t: "public",
      url: "https://asuorchard.asu.edu/",
    },
    description:
      "Orchard is a ASU product where teachers can create custom courses",
    imageSrc: "/orchard.png",
    topics: ["typescript", "react", "material-ui", "nextjs", "supabase"],
  },
];

const sideProjects: Project[] = [
  {
    title: "gamezilla.app",
    deployment: {
      t: "public",
      url: "https://gamezilla.app/",
    },
    code: {
      t: "private",
    },
    description: `A work-in-progress multiplayer gaming app. Implemented using a full-stack variant of the Elm architecture in TypeScript. Copied from the ${a(
      lamderaHref,
      "Lamdera"
    )} platform.`,
    imageSrc: "/gamezilla.png",
    youTubeVideoId: "VSLpdPvHbD4",
    topics: ["typescript", "react", "postgres", "tailwind", "socket-io", "bun"],
  },

  {
    title: "headless-combobox",
    deployment: {
      t: "public",
      url: "https://headless-combobox-demo-svelte.vercel.app",
    },
    code: {
      t: "public",
      url: "https://github.com/crvouga/headless-combobox",
    },
    imageSrc: "https://github.com/crvouga/headless-combobox/raw/main/demo.gif",
    description: `Purely functional, headless, framework-agnostic, zero dependency, accessible, TypeScript combobox library Used to create comboboxes in any UI framework.`,
    topics: ["typescript"],
  },

  {
    title: "Pickflix",
    deployment: {
      t: "not-deployed-anymore",
      // url: "https://crvouga-pickflix.herokuapp.com/",
    },
    code: {
      t: "public",
      url: "https://github.com/crvouga/pickflix-v1",
    },
    description:
      "Watch trailers, write reviews and make movie lists with your friends.",
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
    code: {
      t: "public",
      url: "https://github.com/crvouga/todo",
    },
    deployment: {
      t: "not-deployed-anymore",
      // url: "https://todo.chrisvouga.dev",
    },
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
    code: {
      t: "public",
      url: "https://github.com/crvouga/screenshot-service",
    },
    deployment: {
      t: "not-deployed-anymore",
      // url: "https://screenshotservice.chrisvouga.dev",
    },
    description: `A software-as-a service app that lets developers generate screenshots for their websites. It was used for this website.`,
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
    title: "Courier Company Website",
    deployment: {
      t: "public",
      url: "https://gps-couriers-website.vercel.app/",
    },
    code: {
      t: "private",
    },
    description: "A marketing website for a hospice courier company.",
    imageSrc: "/courier.png",
    youTubeVideoId: "kFwPTJcM6I0",
    topics: ["css", "material-ui", "nextjs", "react", "typescript"],
  },

  {
    title: "Band Website with E-commerce",
    deployment: {
      t: "public",
      url: "https://thebandalibi.chrisvouga.dev/",
    },
    code: {
      t: "public",
      url: "https://github.com/crvouga/thebandalibi-com",
    },
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
    title: "Anime Blog",
    description: "A jamstack blog about anime.",
    imageSrc: "/anime.png",
    topics: [
      "css",
      "javascript",
      "sanity",
      "vue",
      "bootstrap",
      "graphql",
      "gridsome",
    ],
    deployment: {
      t: "public",
      url: "https://anime.chrisvouga.dev/",
    },
    code: {
      t: "public",
      url: "https://github.com/crvouga/anime",
    },
  },

  {
    title: "Multiplayer Connect Four",
    deployment: {
      t: "public",
      url: "https://connectfour.chrisvouga.dev/",
    },
    code: {
      t: "public",
      url: "https://github.com/crvouga/connect-four",
    },
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
    deployment: {
      t: "public",
      url: "https://snake.chrisvouga.dev/",
    },
    code: {
      t: "public",
      url: "https://github.com/crvouga/snake",
    },
    description:
      "Pure functional implementation of the classic game Snake with smooth snake movement",
    imageSrc: "/snake.png",
    youTubeVideoId: "7El3RdkzlHs",
    topics: ["css", "javascript", "ramda", "react"],
  },

  {
    title: "Match Three",
    deployment: {
      url: "https://matchthree.chrisvouga.dev/",
      t: "public",
    },
    code: {
      t: "public",
      url: "https://github.com/crvouga/match-three",
    },
    description: "Match Three is a Candy Crush type game",
    imageSrc: "/match-three.png",
    youTubeVideoId: "VBrlDgmXSoA",
    topics: ["css", "javascript", "ramda", "react", "redux", "redux-saga"],
  },

  {
    title: "Cheese",
    deployment: {
      t: "public",
      url: "https://cheese.chrisvouga.dev/",
    },
    code: {
      t: "public",
      url: "https://github.com/crvouga/cheese",
    },
    description:
      "Cheese is an app that lets people make fake GCU ids so they can sneak into GCU events.",
    imageSrc: "/cheese.png",
    youTubeVideoId: "hv3tRBHF7w4",
    topics: ["css", "typescript", "material-ui", "react", "firebase"],
  },

  {
    title: "Simon Says",
    deployment: {
      t: "public",
      url: "https://simonsays.chrisvouga.dev/",
    },
    code: {
      t: "public",
      url: "https://github.com/crvouga/simon-says",
    },
    description: "An implementation of the classic memory game Simon Says.",
    imageSrc: "/simon-says.png",
    youTubeVideoId: "WrUFzlKL0E0",
    topics: ["css", "javascript", "ramda", "react", "redux", "redux-saga"],
  },
];

const aboutMe = `
My name is Chris Vouga. I'm a software developer living in the Phoenix Valley.
I graduated from ASU with a bachelor's degree in mathematics and statistics.
Software development is also a hobby for me. I enjoy consuming techinal content and developing apps in my free time.
Right now, I'm primarily doing web development, but I would be interested in other types of development.
A random fact about me is that I play the drums in a ${a(bandHref, "band")}.`;

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
  bootstrap: "/bootstrap.svg",
  graphql: "/graphql.svg",
  gridsome: "/gridsome-icon.svg",
  mysql: "/mysql.svg",
  nuxt: "/nuxt-icon.svg",
  python: "/python.svg",
  aws: "/aws.svg",
  bun: "/bun.svg",
};

export type Topic = keyof typeof topicToImageSrc;

export const topicToName: {
  [key in Topic]: string;
} = {
  typescript: "TypeScript",
  heroku: "Heroku",
  jest: "Jest",
  "redux-saga": "Redux Saga",
  ramda: "Ramda",
  react: "React",
  firebase: "Firebase",
  docker: "Docker",
  supabase: "Supabase",
  postgres: "Postgres",
  "material-ui": "Material UI",
  nextjs: "Next.js",
  "socket-io": "Socket.io",
  express: "Express",
  css: "CSS",
  shopify: "Shopify",
  sanity: "Sanity",
  nodejs: "Node.js",
  puppeteer: "Puppeteer",
  redux: "Redux",
  rxjs: "RxJS",
  elm: "Elm",
  "react-query": "React Query",
  greensock: "Greensock",
  javascript: "JavaScript",
  vue: "Vue",
  tailwind: "Tailwind",
  mongodb: "MongoDB",
  bootstrap: "Bootstrap",
  graphql: "GraphQL",
  gridsome: "Gridsome",
  mysql: "MySQL",
  nuxt: "Nuxt",
  python: "Python",
  aws: "AWS",
  bun: "Bun",
};

export function topics(topics: Topic[]): Topic[] {
  return topics;
}

type Code =
  | {
      t: "private";
    }
  | {
      t: "public";
      url: string;
    };

type Deployment =
  | {
      t: "public";
      url: string;
    }
  | {
      t: "not-deployed-anymore";
    }
  | {
      t: "private";
    };

export type Project = {
  title: string;
  deployment: Deployment;
  code: Code;
  description: string;
  imageSrc: string;
  youTubeVideoId?: string;
  topics: Topic[];
};

export const projectToLinkHref = (project: Project) => {
  if (project.deployment.t === "public") {
    return project.deployment.url;
  }
  if (project.code.t === "public") {
    return project.code.url;
  }
  return null;
};

export type Work = {
  name: string;
  infoUrl?: string;
  jobTitle: string;
  jobDescription: string;
  startDate: Date;
  endDate: Date | "Present";
};

//
//
//
//
//
//
//

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

  sideProjects,

  workProjects,

  work,
};

function a(href: string, text: string) {
  return `<a style="color: white;" target="_blank" rel="noreferrer noopener" href="${href}">${text}</a>`;
}
