import React from "react";

import "./style.scss";

const Sheet = ({ children }) => (
  <section className="sheet">
    <section className="sheet__inner">{children}</section>
  </section>
);

export default Sheet;
