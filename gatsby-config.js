const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.therichardblog.com",
    title: "The Richard's blog",
    titleTemplate: "%s - The Richard's blog",
    description: "A digital notebook of Richard",
    image: "src/images/icon.png",
    twitterUsername: "@richardnguyenmh",
    github: "https://github.com/richardnguyen99",
    linkedin: "https://www.linkedin.com/in/richardmhnguyen/",
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        },
      },
    },
  ],
};
