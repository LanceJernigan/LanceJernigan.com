import React from "react";

import Card from "../card";
import StickyHeader from "../stickyHeader";

import "./style.scss";

const Skills = () => (
  <section className="skills">
    <StickyHeader>
      <h2>Skills</h2>
    </StickyHeader>
    <section className="skills__content">
      <Card>
        <h3>User Interface</h3>
        <p>
          Javascript, React, Redux, ReactN, Framer motion, SCSS, PostCSS,
          Webpack, Babel, REST APIs
        </p>
      </Card>
      <Card>
        <h3>Server</h3>
        <p>Node, .NET, WordPress, PHP, Java, AWS, Google Firebase, CI/CD</p>
      </Card>
      <Card>
        <h3>User Experience</h3>
        <p>Figma, Sketch, InVision, Marvel, HotJar</p>
      </Card>
    </section>
  </section>
);

export default Skills;
