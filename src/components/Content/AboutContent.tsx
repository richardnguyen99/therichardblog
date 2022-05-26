/**
 * Content component for /about page
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { StyledContentContainer } from "./style";

export const AboutContent: React.FC = () => (
  <StyledContentContainer id="about-content">
    <h1>Hi there, 👋</h1>
    <p>Let me introduce myself and this website to you!</p>

    <h3>About me</h3>
    <p>
      My name is Richard Nguyen. I originally came from Vietnam, enrolled in Highline College for
      Associated of Science in Computer Science and currently studying Bachelor Degree in Computer
      Science at Seattle University, Washington, U.S.
    </p>
    <p>
      I tend to learn everything I find intertested in programming. However, my strongest field is
      web development. Some programming languages and frameworks that I&apos;m familiar with are
    </p>

    <ul>
      <li>
        <b>Languages:</b> Python, Javascript / Typescript, C++, HTML, (S)CSS.
      </li>
      <li>
        <b>Frameworks:</b> React, Flask, ExpressJS, Styled-components, TailWindCSS.
      </li>
      <li>
        <b>Others:</b> PostgresQL, MongoDB, Git, Bash, Heroku.
      </li>
    </ul>

    <h3>About this site</h3>
    <p>
      I&apos; created this website as my digital notebooks that I write down every struggle and
      solution I experience during my learning journey. It helps me know what the problem is and how
      I solve it.
    </p>
    <p>
      I also want to share what I know with everyone who is having the same problem as I have
      before. So they learn another solution to solve the problem, or they give me some feedback to
      correct or improve my solution.
    </p>
  </StyledContentContainer>
);
