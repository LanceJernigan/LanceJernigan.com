import React from "react";

import "./style.scss";

const Card = ({ children, background, link = false, target = "_self" }) => {
  return (
    <article className={`card ${background ? "card--background" : ""}`}>
      <section className="card__content">{children}</section>

      {background ? (
        <section className="card__background">
          <img src={background} alt="card background" />
        </section>
      ) : null}
    </article>
  );
};

export default Card;
