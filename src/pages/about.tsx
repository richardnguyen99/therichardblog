import * as React from "react";

import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Section from "@components/Section";
import { StyledBlinkingCursor as BlinkCursor } from "@components/Animation/BlinkingCursor";
import useMediaHooks from "@hooks/useMediaQuery";

const AboutPage: React.FC = () => {
  const [isWide] = useMediaHooks({ minWidth: "1023px" });

  return (
    <main>
      <SEO title="About" description="Welcome to the Richard's blog" />
      <Layout>
        <Section.Heading>
          About Richard
          {isWide && <BlinkCursor>|</BlinkCursor>}
        </Section.Heading>
      </Layout>
    </main>
  );
};

export default AboutPage;
