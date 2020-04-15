import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import Navigation from "./components/navigation";
import Routes from "./routes";

import "./styles.scss";

export default function App() {
  return (
    <Router>
      <article className="app">
        <Routes />
        {/* <Navigation /> */}
      </article>
    </Router>
  );
}
