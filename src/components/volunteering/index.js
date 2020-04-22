import React from "react";

import Card from "../card";
import StickyHeader from "../stickyHeader";

import "./style.scss";

const Volunteering = () => (
  <section className="volunteering">
    <StickyHeader>
      <h2>Volunteering</h2>
    </StickyHeader>
    <section className="experience__content">
      <Card>
        <h3>Coding Dojo</h3>
        <h4>Organizer</h4>
        <p>
          I presented talks and organized local professionals to provide talks
          about the modern web and how to start building progressive web apps.
          As a completely free resource, I provided help to anyone online or in
          Knoxville who wanted to improve their skills and create web apps.
        </p>
      </Card>
      <Card>
        <h3>Code Connective</h3>
        <h4>Mentor</h4>
        <p>
          As a mentor, I was a helping hand during free events Code Connective
          organized. I presented my talks free to the community and partnered
          with Code Connective to help bring free resources to those who wanted
          to grow their career but might not have the resources or means to do
          so.
        </p>
      </Card>
      <Card>
        <h3>Code TN</h3>
        <h4>Mentor</h4>
        <p>
          As a mentor, I partnered with local schools to teach students valuable
          coding skills they would use after graduating and entering the
          professional industry. My team had to collaborate on choosing a
          project to create, strategizing how to accomplish the project, and
          work as a team to complete the project in a single semester.
        </p>
      </Card>
    </section>
  </section>
);

export default Volunteering;
