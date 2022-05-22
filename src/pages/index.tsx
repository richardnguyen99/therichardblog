/**
 * Main page for the site ("/")
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import Container from "@components/Container";
import Section from "@components/Section";

const Index: React.FC = () => {
  return (
    <Container.Main>
      <Section.Main>
        <h1>The Richard&apos;s Blog</h1>
      </Section.Main>
    </Container.Main>
  );
};

export default Index;
