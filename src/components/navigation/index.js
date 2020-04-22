import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import MenuIcon from "../../icons/menu";
import ChevronIcon from "../../icons/chevron";
import MoreIcon from "../../icons/more";

import "./style.scss";

const handleDrawerClick = (isOpen, setOpen, drawer) => () => {
  setOpen(!isOpen);

  if (isOpen) {
    document.activeElement.blur();
  } else {
    window.setTimeout(() => {
      drawer.querySelector(".navigation__inner a").focus();
    }, 350);
  }
};

const Navigation = () => {
  const {
    location: { pathname },
    push: goBack
  } = useHistory();
  const [lastLocation, setLastLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState(pathname);
  const [drawer, setRef] = useState();
  const [isOpen, setOpen] = useState(false);
  const [isPeeking, setPeek] = useState(false);

  if (currentLocation !== pathname) {
    setLastLocation(currentLocation);
    setCurrentLocation(pathname);
  }

  return (
    <section
      ref={drawer => setRef(drawer)}
      className={`navigation ${isOpen ? "navigation--open" : ""} ${
        isPeeking ? "navigation--peeking" : ""
      }`}
    >
      <ul className="navigation__actions">
        <li className="navigation__action">
          <button
            className={`navigation__button`}
            onFocus={() => setPeek(true)}
            onBlur={() => setPeek(false)}
            onClick={() => {
              setOpen(false);
              document.activeElement.blur();
              goBack(lastLocation);
            }}
            disabled={!lastLocation}
          >
            <ChevronIcon direction="left" />
          </button>
        </li>
        <li className="navigation__action">
          <button
            className="navigation__button"
            onFocus={() => setPeek(true)}
            onBlur={() => setPeek(false)}
            onClick={handleDrawerClick(isOpen, setOpen, drawer)}
            aria-pressed={isOpen}
          >
            <MenuIcon />
          </button>
        </li>
        <li className="navigation__action">
          <button
            className="navigation__button"
            onFocus={() => setPeek(true)}
            onBlur={() => setPeek(false)}
            onClick={handleDrawerClick(isOpen, setOpen, drawer)}
          >
            <MoreIcon />
          </button>
        </li>
      </ul>
      <ul className="navigation__inner">
        <li>
          <NavLink exact to="/" tabIndex={isOpen ? "0" : "-1"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" tabIndex={isOpen ? "0" : "-1"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/resources" tabIndex={isOpen ? "0" : "-1"}>
            Resources
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Navigation;
