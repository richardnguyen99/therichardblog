/**
 * Core template components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import Layout from "@components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const PostTemplate: React.FC<{ data: Record<string, any> }> = ({ data: { mdx } }) => {
  return (
    <Layout>
      <MDXProvider>
        <MDXRenderer headings={mdx.headings}>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export const postQuery = graphql`
  query Post($id: String) {
    mdx(id: { eq: $id }) {
      body
      excerpt
      id
      timeToRead
      headings(depth: h1) {
        depth
        value
      }
      slug
      frontmatter {
        categories
        created
        description
        stack
        title
      }
    }
  }
`;

export default PostTemplate;
