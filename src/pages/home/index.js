import React from "react";
import { Helmet } from "react-helmet";

import coverSrc from "../../assets/cover.png";

import Sheet from "../../components/sheet";
import Overview from "../../components/overview";
import Hero from "../../components/hero";
import Profile from "../../components/profile";
import Skills from "../../components/skills";
import Experience from "../../components/experience";
import Volunteering from "../../components/volunteering";

const Home = () => (
  <section className="home">
    <Helmet>
      <title>Home</title>
      <meta
        name="description"
        content="I work with teams to build industry leading progressive web apps."
      />
    </Helmet>
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

export default Home;
