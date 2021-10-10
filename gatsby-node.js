/**
 * Implement Gatsby's Node APIs in this file
 *
 * @see https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@context": path.resolve(__dirname, "src", "context"),
        "@hooks": path.resolve(__dirname, "src", "hooks"),
        "@components": path.resolve(__dirname, "src", "components"),
        "@pages": path.resolve(__dirname, "src", "pages"),
        "@styles": path.resolve(__dirname, "src", "styles"),
        "@generated": path.resolve(__dirname, "src", "generated"),
      },

      fallback: {
        timers: require.resolve("timers-browserify"),
      },
    },
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: "slug",
      node,
      value: `/post${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query MyQuery {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              categories
              created
              description
              stack
              title
              thumbnail
            }
            timeToRead
            wordCount {
              paragraphs
              sentences
              words
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`🚨  ERROR: Loading "createPages" query`);
  }

  const posts = result.data.allMdx.edges;
  const tags = new Set();

  posts.forEach(({ node }, index) => {
    node.frontmatter.stack.forEach((tag) => {
      tags.add(tag);
    });

    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/components/Template/index.tsx"),
      context: { id: node.id },
    });
  });
};
