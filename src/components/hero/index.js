import React from "react";

import "./style.scss";

const Hero = ({ children, background }) => (
  <section className="hero">
    <section className="hero__inner">{children}</section>
    {background ? (
      <section className="hero__background">
        <img src={background} alt="hero background" />
      </section>
    ) : null}
  </section>
);

export default Hero;
