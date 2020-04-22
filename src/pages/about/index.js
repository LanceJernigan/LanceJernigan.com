import React from "react";

import coverSrc from "../../assets/cover.png";

import Sheet from "../../components/sheet";
import Overview from "../../components/overview";
import Hero from "../../components/hero";
import Profile from "../../components/profile";
import Skills from "../../components/skills";
import Experience from "../../components/experience";
import Volunteering from "../../components/volunteering";

const About = () => (
  <section className="home">
    <Hero background={coverSrc}>
      <Profile />
    </Hero>

    <Sheet className="content">
      <Overview />
      <Skills />
      <Experience />
      <Volunteering />
    </Sheet>
  </section>
);

export default About;
