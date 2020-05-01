import React from "react";

import "./style.scss";

const StickyHeader = ({ children }) => (
  <>
    <header className="sticky_header">
      <section className="sticky_header__inner">{children}</section>
    </header>
    <div className="sticky_header__shadow" />
    <div className="sticky_header__cover" />
  </>
);

export default StickyHeader;
