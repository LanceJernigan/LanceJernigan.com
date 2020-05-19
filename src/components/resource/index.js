import React from "react";
import { useParams } from "react-router-dom";

import Hero from "../hero";
import Sheet from "../sheet";

const Resource = props => {
  const { slug } = useParams();

  return (
    <section className="resources">
      <Hero background={coverSrc}>
        <h1>Resources</h1>
      </Hero>

      <Sheet>
        <StickyHeader>
          <h2>Featured</h2>
        </StickyHeader>
      </Sheet>
    </section>
  );
};

export default Resource;
