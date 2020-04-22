import React from "react";

import Sheet from "../../components/sheet";
import Overview from "../../components/overview";
import Hero from "../../components/hero";
import Profile from "../../components/profile";
import Skills from "../../components/skills";
import Experience from "../../components/experience";
import Volunteering from "../../components/volunteering";

const About = () => (
  <section className="home">
    <Hero>
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
