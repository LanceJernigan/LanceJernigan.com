import React from "react";

import Button from "../button";
import StickyHeader from "../stickyHeader";

import "./style.scss";

const Overview = () => (
  <section className="overview">
    <StickyHeader>
      <h2>Overview</h2>
      <Button type="tertiary" label="Read More" to="/about" />
    </StickyHeader>
    <section className="overview__content">
      <p>
        I work with teams to build industry leading progressive web apps. My
        time in the industry is split between agency life and in house life
        giving me a well rounded perspective of the industry and how to get
        products to market. Along the way, I’ve spent many hours mentoring
        engineers and organizing meetups to pass along the knowledge I’ve
        learned.
      </p>
    </section>
  </section>
);

export default Overview;
