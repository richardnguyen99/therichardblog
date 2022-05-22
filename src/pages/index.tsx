/**
 * Main page for the site ("/")
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import Container from "@components/Container";
import Section from "@components/Section";
import SEO from "@components/SEO";

const Index: React.FC = () => {
  return (
    <Container.Main>
      <SEO title="Home" description="The Richard's blog home page" />
      <Section.Main>
        <h1>The Richard&apos;s Blog</h1>
      </Section.Main>
    </Container.Main>
  );
};

export default Index;
