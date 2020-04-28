import React from "react";

import codeSplittingCoverSrc from "../../assets/codeSplittingCover.jpg";

import Sheet from "../../components/sheet";
import Hero from "../../components/hero";
import Card from "../../components/card";
import StickyHeader from "../../components/stickyHeader";

import coverSrc from "../../assets/resources.jpg";

import "./style.scss";

const Resources = () => (
  <section className="resources">
    <Hero background={coverSrc}>
      <h1>Resources</h1>
    </Hero>

    <Sheet>
      <StickyHeader>
        <h2>Featured</h2>
      </StickyHeader>
      <section className="resources__featured">
        <Card background={codeSplittingCoverSrc}>
          <h2>
            <a href="#test" target="_blank">
              Code Splitting and Asynchronous Components
            </a>
          </h2>
        </Card>
      </section>
    </Sheet>
  </section>
);

export default Resources;
