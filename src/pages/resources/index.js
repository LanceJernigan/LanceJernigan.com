import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import codeSplittingCoverSrc from "../../assets/codeSplittingCover.jpg";
import betterAppsCoverSrc from "../../assets/betterAppsCover.jpg";
import wordPressReactCoverSrc from "../../assets/wordPressReactCover.jpg";
import principleConnectCoverSrc from "../../assets/principleConnect/dashboard.jpg";

import Sheet from "../../components/sheet";
import Hero from "../../components/hero";
import Card from "../../components/card";
import StickyHeader from "../../components/stickyHeader";

import coverSrc from "../../assets/resources.jpg";

import "./style.scss";

const Resources = () => (
  <section className="resources">
    <Helmet>
      <title>Resources</title>
      <meta
        name="description"
        content="A comprehensive list of all the resources I've presented and written over the years."
      />
      <meta property="og:title" content="Resources | Lance Jernigan" />
      <meta
        property="og:description"
        content="A comprehensive list of all the resources I've presented and written over the years."
      />
    </Helmet>
    <Hero background={coverSrc}>
      <h1>Resources</h1>
    </Hero>

    <Sheet>
      <StickyHeader>
        <h2>Featured</h2>
      </StickyHeader>
      <section className="resources__featured">
        <Card background={betterAppsCoverSrc}>
          <h2>
            <a
              href="https://www.linkedin.com/posts/lancejernigan_building-better-apps-with-javascript-activity-6655611066845921280-MTek"
              target="_blank"
              rel="noopener noreferrer"
            >
              Building Better Apps with Javascript
            </a>
          </h2>
        </Card>
      </section>

      <StickyHeader>
        <h2>Presentations</h2>
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
          <Card background={wordPressReactCoverSrc}>
            <h2>
              <a
                href="https://www.linkedin.com/posts/lancejernigan_building-web-apps-with-wordpress-and-react-activity-6655608445674360832-kkNy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Building Web Apps with WordPress and React
              </a>
            </h2>
          </Card>
        </li>
      </ul>
      <StickyHeader>
        <h2>Case Studies</h2>
      </StickyHeader>
      <ul className="resources__all">
        <li>
          <Card background={principleConnectCoverSrc}>
            <h2>
              <Link to="/resource/principle-connect">Principle Connect</Link>
            </h2>
            <h3>User Experience</h3>
          </Card>
        </li>
      </ul>
    </Sheet>
  </section>
);

export default Resources;
