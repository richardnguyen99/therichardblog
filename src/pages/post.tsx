import * as React from "react";

import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Section from "@components/Section";
import { StyledBlinkingCursor as BlinkCursor } from "@components/Animation/BlinkingCursor";
import useMediaHooks from "@hooks/useMediaQuery";

const PostPage: React.FC = () => {
  const [isWide] = useMediaHooks({ minWidth: "1023px" });
  return (
    <main>
      <SEO title="Post" description="Welcome to the Richard's blog" />
      <Layout>
        <Section.Heading>
          Richard&apos;s&nbsp;blog
          {isWide && <BlinkCursor>|</BlinkCursor>}
        </Section.Heading>
      </Layout>
    </main>
  );
};

export default PostPage;
