import React from "react";
import { Helmet } from "react-helmet";

import coverSrc from "../../assets/about.jpg";

import Sheet from "../../components/sheet";
import Overview from "../../components/overview";
import Hero from "../../components/hero";
import Skills from "../../components/skills";
import Experience from "../../components/experience";
import Volunteering from "../../components/volunteering";

const About = () => (
  <section className="home">
    <Helmet>
      <title>About</title>
      <meta
        name="description"
        content="I work with teams to build industry leading progressive web apps."
      />
      <meta property="og:title" content="About | Lance Jernigan" />
      <meta
        property="og:description"
        content="I’m a seasoned Web Engineer with a history in design and development who’s been helping teams build industry leading progressive web apps and mentoring others along the way."
      />
    </Helmet>
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
