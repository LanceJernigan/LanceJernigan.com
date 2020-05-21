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
      <meta property="og:image" content={coverSrc} />
      <meta property="og:title" content="Home | Lance Jernigan" />
      <meta
        property="og:description"
        content="I’m a seasoned Web Engineer with a history in design and development who’s been helping teams build industry leading progressive web apps and mentoring others along the way."
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
