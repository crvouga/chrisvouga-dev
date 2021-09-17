const SITE_URL = "https://chrisvouga.dev";

const LOGO_URL = `${SITE_URL}/logo.png`;

const ABOUT_ME = `
  Hello, my name is Chris Vouga. I'm a software engineer based in the
  Phoenix Valley. I find it a lot of fun to create things that live on
  the web. A random fact about me is that I play the drums. I have achieved
  a Bachelor of Science degree in Mathematics and Statistics from Arizona State University.
  `.trim();

export default {
  title: "Chris Vouga",

  subtitle: "Software Engineer",

  aboutMe: ABOUT_ME,

  meta: {
    title: "Chris Vouga • Software Engineer",
    description: ABOUT_ME,
    author: "Chris Vouga",
    siteUrl: SITE_URL,
    imageUrl: LOGO_URL,
    iconUrl: LOGO_URL,
    keywords: [
      "chris",
      "christopher",
      "vouga",
      "chrisvouga",
      "christophervouga",
      "developer",
      "web",
    ],
  },

  socialMedia: [
    {
      name: "Github",
      url: "https://github.com/crvouga",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/chris-vouga",
    },
    {
      name: "Email",
      url: "mailto:crvouga@gmail.com",
    },
  ],

  projectIds: [
    {
      title: "Pickflix",
      github: {
        ownerName: "crvouga",
        repositoryName: "pickflix",
      },
    },
    {
      title: "Alibi Official Site",
      github: {
        ownerName: "crvouga",
        repositoryName: "thebandalibi-com",
      },
    },
    {
      title: "Connect Four",
      github: {
        ownerName: "crvouga",
        repositoryName: "connect-four",
      },
    },
    {
      title: "Match Three",
      github: {
        ownerName: "crvouga",
        repositoryName: "match-three",
      },
    },
    {
      title: "Simon Says",
      github: {
        ownerName: "crvouga",
        repositoryName: "simon-says",
      },
    },

    {
      title: "Personal Website",
      github: {
        ownerName: "crvouga",
        repositoryName: "chrisvouga-dev",
      },
    },
  ],
};
