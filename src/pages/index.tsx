import * as React from "react";

import Navbar from "@components/Navbar";
import Section from "@components/Section";
import SEO from "@components/SEO";

const IndexPage: React.FC = () => {
  return (
    <>
      <SEO title="Home" description="Welcome to the Richard's blog" />
      <Navbar />
      <main>
        <Section.Hero />
      </main>
    </>
  );
};

export default IndexPage;
