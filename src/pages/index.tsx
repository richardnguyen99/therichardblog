/**
 * Main page for the site ("/")
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import Container from "@components/Container";

const Index: React.FC = () => {
  return (
    <Container.Main>
      <h1>Hello, World</h1>
    </Container.Main>
  );
};

export default Index;
