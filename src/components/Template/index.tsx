/**
 * Core template components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "@components/Layout";
import { PostQuery } from "@generated/graphql";
import {
  StyledPost,
  StyledFlexPostContainer,
  StyledPostHeader,
  StyledPostHeaderNav,
  StyledPostHeaderNavLeft,
  StyledPostHeaderNavRight,
  StyledPostHeaderNavLink,
} from "./style";

const PostTemplate: React.FC<{ data: PostQuery }> = ({ data: { mdx } }) => {
  return (
    <Layout>
      <Layout.Container style={{ marginTop: "6rem" }}>
        <StyledFlexPostContainer>
          <StyledPost>
            <div>
              <StyledPostHeader>{mdx.frontmatter.title}</StyledPostHeader>
              <StyledPostHeaderNav>
                <StyledPostHeaderNavLeft>
                  {mdx.frontmatter.created} <span style={{ margin: "0px 7px" }}>·</span>{" "}
                  {mdx.timeToRead} min
                  <StyledPostHeaderNavLink to={`/category/${mdx.frontmatter.categories[0]}`}>
                    {mdx.frontmatter.categories[0]}
                  </StyledPostHeaderNavLink>
                </StyledPostHeaderNavLeft>
                <StyledPostHeaderNavRight></StyledPostHeaderNavRight>
              </StyledPostHeaderNav>
            </div>
            <MDXProvider>
              <MDXRenderer headings={mdx.headings}>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </StyledPost>
        </StyledFlexPostContainer>
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
