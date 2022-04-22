/**
 * Hero section for index page
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import styled from "styled-components";

import Container from "./Container";
import Content from "./Content";
import Heading from "@components/Typo";
import SVG from "@components/svg";
import Typo from "@components/Typo";

const StyledHeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 30px 0 32px;
  color: #24292f;
  font-weight: 600;
  font-size: var(--fs-base);
  line-height: 1;
  background-color: #f6f8fa;
  border-radius: 6px;
  transition: all 0.25s;
  text-decoration: none;

  &:hover {
    background-color: #e1e4e8;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.5), 0 100px 80px hsla(0, 0%, 100%, 0.0174624),
      0 41.7776px 33.4221px hsla(0, 0%, 100%, 0.0235573),
      0 22.3363px 17.869px hsla(0, 0%, 100%, 0.0282784),
      0 12.5216px 10.0172px hsla(0, 0%, 100%, 0.0339075),
      0 6.6501px 5.32008px hsla(0, 0%, 100%, 0.04317), 0 2.76726px 2.21381px hsla(0, 0%, 100%, 0.07);
  }

  p {
    margin-right: 3px;
  }
`;

const Hero: React.FC = () => {
  return (
    <Container>
      <Content>
        <SVG.Hero />
        <Heading.H1>
          Latest from <Typo.LinearSpan>Richard</Typo.LinearSpan>
        </Heading.H1>
        <Typo.Subtitle>
          Hi, my name is Richard. This website is my digital diary for everything I&apos;ve learned,
          a collection of projects that I&apos;ve been working on.
        </Typo.Subtitle>
        <StyledHeroButton href="https://github.com/richardnguyen99/therichardblog">
          <p>See me at Github</p> <SVG.Github />
        </StyledHeroButton>
      </Content>
    </Container>
  );
};

export default Hero;
