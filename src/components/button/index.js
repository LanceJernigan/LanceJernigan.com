import React from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

import Chevron from "../../icons/chevron";

import "./style.scss";

const updateGA = (label, to) => () => {
  ReactGA.event({
    category: "navigation",
    action: "Button Click",
    label: label,
    to: to
  });
};

const Button = ({ type = "primary", to = "#", label = "Read More" }) => (
  <Link to={to} className={`button button--${type}`} onClick={updateGA(label)}>
    {label}

    {type === "tertiary" ? <Chevron /> : null}
  </Link>
);

export default Button;
