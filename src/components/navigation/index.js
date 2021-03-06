import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import MenuIcon from "../../icons/menu";
import ChevronIcon from "../../icons/chevron";
import MoreIcon from "../../icons/more";

import "./style.scss";

const handleDrawerClick = (isOpen, setOpen) => () => {
  setOpen(!isOpen);

  document.activeElement.blur();
};

const Navigation = () => {
  const {
    location: { pathname },
    action
  } = useHistory();
  const [locations, setLocations] = useState([]);
  const [drawer, setRef] = useState();
  const [isOpen, setOpen] = useState(false);
  const [lastLocation] = locations.slice(-1);

  if (action === "PUSH" && lastLocation !== pathname) {
    setLocations([...locations, pathname]);
  }

  return (
    <section
      ref={drawer => setRef(drawer)}
      className={`navigation ${isOpen ? "navigation--open" : ""}`}
    >
      <section
        className="navigation__backdrop"
        onClick={() => setOpen(false)}
      />
      <ul className="navigation__actions">
        <li className="navigation__action">
          <button
            className={`navigation__button`}
            onClick={() => {
              setOpen(false);
              window.history.back();
              setLocations(locations.slice(0, locations.length - 1));
            }}
            disabled={!locations.length}
          >
            <ChevronIcon direction="left" />
          </button>
        </li>
        <li className="navigation__action">
          <button
            className="navigation__button"
            onClick={handleDrawerClick(isOpen, setOpen, drawer)}
            aria-pressed={isOpen}
          >
            <MenuIcon />
          </button>
        </li>
        <li className="navigation__action">
          <button
            className="navigation__button"
            onClick={handleDrawerClick(isOpen, setOpen, drawer)}
            disabled
          >
            <MoreIcon />
          </button>
        </li>
      </ul>
      <ul className="navigation__inner">
        <li>
          <NavLink
            exact
            to="/"
            tabIndex={isOpen ? "0" : "-1"}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/about"
            tabIndex={isOpen ? "0" : "-1"}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/resources"
            tabIndex={isOpen ? "0" : "-1"}
            onClick={() => setOpen(false)}
          >
            Resources
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Navigation;
