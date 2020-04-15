import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/hero";
import Sheet from "../../components/sheet";

import "./style.scss";

const FourOhFour = () => (
  <section className="fourOhFour">
    <Hero>
      <h1>404</h1>
    </Hero>

    <Sheet>
      <section className="fourOhFour__content">
        <h2>Looks like that page doesn't exist</h2>
        <p>
          <Link to="/">Return Home</Link>
        </p>
      </section>
    </Sheet>
  </section>
);

export default FourOhFour;
