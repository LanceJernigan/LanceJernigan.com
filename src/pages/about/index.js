import React from "react";

import coverSrc from "../../assets/about.jpg";

import Sheet from "../../components/sheet";
import Overview from "../../components/overview";
import Hero from "../../components/hero";
import Skills from "../../components/skills";
import Experience from "../../components/experience";
import Volunteering from "../../components/volunteering";

const About = () => (
  <section className="home">
    <Hero background={coverSrc}>
      <h1>About</h1>
    </Hero>

    <Sheet>
      <Overview />
      <Skills />
      <Experience />
      <Volunteering />
    </Sheet>
  </section>
);

export default About;
