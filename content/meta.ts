import overview from "raw-loader!./overview.md";

const siteUrl = "https://chrisvouga.dev";
const logoUrl = `${siteUrl}/logo.png`;

export default {
  title: "Chris Vouga | Software Developer",
  description: overview,
  author: "Chris Vouga",
  siteUrl,
  imageUrl: logoUrl,
  iconUrl: logoUrl,
  keywords: [
    "chris",
    "christopher",
    "vouga",
    "chrisvouga",
    "christophervouga",
    "developer",
    "web",
  ],
};
