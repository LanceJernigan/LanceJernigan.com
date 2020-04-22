import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/navigation";
import Routes from "./routes";

import "./styles.scss";

export default function App() {
  const appRef = useRef();
  const scrollToTop = () => window.scrollTo(0, appRef.current.offsetTop);

  return (
    <Router>
      <article className="app" ref={appRef}>
        <Routes scrollToTop={scrollToTop} />
        <Navigation />
      </article>
    </Router>
  );
}
