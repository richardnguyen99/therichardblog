/**
 * Hero section for index page
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import Container from "./Container";
import Content from "./Content";
import Heading from "@components/Typo";
import SVG from "@components/svg";
import Typo from "@components/Typo";

const Hero: React.FC = () => {
  return (
    <Container>
      <Content>
        <SVG.Hero />
        <Heading.H1>
          Latest from <Typo.LinearSpan>Richard</Typo.LinearSpan>
        </Heading.H1>
        <Typo.Subtitle>
          Hi, my name is Richard. I love to share everything I&apos;ve learned in my tech journey,
          and help overcome what I&apos;ve struggled.
        </Typo.Subtitle>
      </Content>
    </Container>
  );
};

export default Hero;
