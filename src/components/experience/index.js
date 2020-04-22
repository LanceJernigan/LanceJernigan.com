import React from "react";

import Card from "../card";
import StickyHeader from "../stickyHeader";

import "./style.scss";

const Experience = () => (
  <section className="experience">
    <StickyHeader>
      <h2>Experience</h2>
    </StickyHeader>
    <section className="experience__content">
      <Card>
        <h3>Regal</h3>
        <h4>Lead Web Engineer</h4>
        <p>
          I worked as a lead engineer building out the next generation of mobile
          web apps for movie lovers. My team was in charge of creating a
          multi-tenant ecosystem while rebranding and internationalizing the
          current web experience for regalcinemas.com.
        </p>
      </Card>
      <Card>
        <h3>Pyxl</h3>
        <h4>Lead Frontend Engineer</h4>
        <p>
          I used modern frontend frameworks and WordPress to build engaging
          websites. As part of the engineering team, I integrated directly with
          client teams to collaborate on product scope to reduce friction
          between client and in house communication
        </p>
      </Card>
      <Card>
        <h3>Principle Global</h3>
        <h4>Software Engineer</h4>
        <p>
          I utilized modern Javascript libraries to improve the engagement with
          our in house project management suite of software we built for fortune
          500 and other high profile clients. In order to increase engagement, I
          worked directly on rebranding and solidifying the existing brand
          language to create a consistent theme across the suite of apps.
        </p>
      </Card>
      <Card>
        <h3>Knoxweb</h3>
        <h4>Javascript Engineer</h4>
        <p>
          I utilized Javascript and other frontend technologies alongside
          WordPress to create websites for clients. Utilizing WordPress allowed
          me to provide clients with the ability to edit their content fluidly
          while building the frontend in Javascript to offer highly interactive
          websites.
        </p>
      </Card>
    </section>
  </section>
);

export default Experience;
