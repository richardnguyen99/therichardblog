const path = require("path");

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
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: "The Richard's blog",
        short_name: "Blog",
        start_url: "/",
        background_color: "#0e0e10",
        theme_color: "#1ed75f",
        display: "minimal-ui",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        remarkPlugins: [],
        gatsbyRemarkPlugins: [
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 560,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: path.join(__dirname, "content", "posts"),
      },
      __key: "posts",
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-offline",
  ],
};
