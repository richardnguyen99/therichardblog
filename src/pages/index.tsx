import * as React from "react";

import Layout from "@components/Layout";
import Section from "@components/Section";
import { StyledBlinkingCursor as BlinkCursor } from "@components/Animation/BlinkingCursor";
import useMediaHooks from "@hooks/useMediaQuery";

const IndexPage: React.FC = () => {
  const [isWide] = useMediaHooks({ minWidth: "1023px" });

  React.useEffect(() => {
    console.log(isWide);
  }, []);

  return (
    <main>
      <Layout>
        <title>PostPage</title>
        <Section.Heading>
          The latest from Richard.
          {isWide && <BlinkCursor>|</BlinkCursor>}
        </Section.Heading>
      </Layout>
    </main>
  );
};

export default IndexPage;
