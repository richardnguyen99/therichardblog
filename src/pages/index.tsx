import * as React from "react";

import Layout from "@components/Layout";
import Section from "@components/Section";
import { StyledBlinkingCursor as BlinkCursor } from "@components/Animation/BlinkingCursor";

const IndexPage: React.FC = () => {
  return (
    <main>
      <Layout>
        <title>PostPage</title>
        <Section.Heading>
          The latest from Richard.
          <BlinkCursor>|</BlinkCursor>
        </Section.Heading>
      </Layout>
    </main>
  );
};

export default IndexPage;
