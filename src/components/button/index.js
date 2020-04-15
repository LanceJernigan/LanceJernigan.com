import React from "react";
import { Link } from "react-router-dom";

import Chevron from "../../icons/chevron";

import "./style.scss";

const Button = ({ type = "primary", to = "#", label = "Read More" }) => (
  <Link to={to} className={`button button--${type}`}>
    {label}

    {type === "tertiary" ? <Chevron /> : null}
  </Link>
);

export default Button;
