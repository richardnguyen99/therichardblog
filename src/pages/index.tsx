import * as React from "react";

import Layout from "@components/Layout";
import Section from "@components/Section";
import SEO from "@components/SEO";
import { StyledBlinkingCursor as BlinkCursor } from "@components/Animation/BlinkingCursor";
import useMediaHooks from "@hooks/useMediaQuery";

const IndexPage: React.FC = () => {
  const [isWide] = useMediaHooks({ minWidth: "1023px" });

  return (
    <main>
      <SEO title="Home" description="Welcome to the Richard's blog" />
      <Layout>
        <Section.Heading>
          The latest from Richard.
          {isWide && <BlinkCursor>|</BlinkCursor>}
        </Section.Heading>
      </Layout>
    </main>
  );
};

export default IndexPage;
