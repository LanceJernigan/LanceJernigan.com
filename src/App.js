import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

import Navigation from "./components/navigation";
import Routes from "./routes";

import "./styles.scss";

ReactGA.initialize("UA-93826471-1");

export default function App() {
  const appRef = useRef();
  const scrollToTop = () => window.scrollTo(0, appRef.current.offsetTop);

  return (
    <Router>
      <Helmet titleTemplate="%s | LanceJernigan.com">
        <base target="_blank" href="https://www.lancejernigan.com" />
        <meta
          name="description"
          content="I’m a seasoned Web Engineer with a history in design and development who’s been helping teams build industry leading progressive web apps and mentoring others along the way."
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lance Jernigan" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="web engineer, web apps, mentor" />
      </Helmet>
      <article className="app" ref={appRef}>
        <Routes scrollToTop={scrollToTop} />
        <Navigation />
      </article>
    </Router>
  );
}
