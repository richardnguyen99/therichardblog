/**
 * Core template components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "@components/Layout";
import { PostQuery } from "@generated/graphql";

const PostTemplate: React.FC<{ data: PostQuery }> = ({ data: { mdx } }) => {
  return (
    <Layout>
      <Layout.Container style={{ marginTop: "6rem" }}>
        <MDXProvider>
          <MDXRenderer headings={mdx.headings}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Layout.Container>
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
