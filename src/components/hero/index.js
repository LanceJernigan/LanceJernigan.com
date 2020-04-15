import React from "react";

import "./style.scss";

const Intro = ({ children }) => (
  <section className="hero">
    <section className="hero__inner">{children}</section>
  </section>
);

export default Intro;
