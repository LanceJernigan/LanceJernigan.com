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
            <a
              href="https://www.linkedin.com/posts/lancejernigan_code-splitting-and-asynchronous-components-activity-6655610663571992576-hAX6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code Splitting and Asynchronous Components
            </a>
          </h2>
        </Card>
      </section>

      {/* <StickyHeader>
        <h2>All</h2>
      </StickyHeader>
      <ul className="resources__all">
        <li>
          <Card background={codeSplittingCoverSrc}>
            <h2>
              <a
                href="https://www.linkedin.com/posts/lancejernigan_code-splitting-and-asynchronous-components-activity-6655610663571992576-hAX6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Splitting and Asynchronous Components
              </a>
            </h2>
          </Card>
        </li>
        <li>
          <Card background={codeSplittingCoverSrc}>
            <h2>
              <a
                href="https://www.linkedin.com/posts/lancejernigan_code-splitting-and-asynchronous-components-activity-6655610663571992576-hAX6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Splitting and Asynchronous Components
              </a>
            </h2>
          </Card>
        </li>
        <li>
          <Card background={codeSplittingCoverSrc}>
            <h2>
              <a
                href="https://www.linkedin.com/posts/lancejernigan_code-splitting-and-asynchronous-components-activity-6655610663571992576-hAX6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Splitting and Asynchronous Components
              </a>
            </h2>
          </Card>
        </li>
        <li>
          <Card background={codeSplittingCoverSrc}>
            <h2>
              <a
                href="https://www.linkedin.com/posts/lancejernigan_code-splitting-and-asynchronous-components-activity-6655610663571992576-hAX6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Splitting and Asynchronous Components
              </a>
            </h2>
          </Card>
        </li>
      </ul> */}
    </Sheet>
  </section>
);

export default Resources;
