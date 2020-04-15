import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import MenuIcon from "../../icons/menu";

import "./style.scss";

const handleDrawerClick = (isOpen, setOpen, drawer) => () => {
  setOpen(!isOpen);

  if (isOpen) {
    document.activeElement.blur();
  }
};

const Navigation = () => {
  const [drawer, setRef] = useState();
  const [isOpen, setOpen] = useState(false);
  const [isPeeking, setPeek] = useState(false);
  const drawerHeight = drawer ? drawer.clientHeight : 0;
  const toggleHeight = drawer ? drawer.firstChild.clientHeight : 0;
  const drawerOffset = isOpen
    ? 0 - (isPeeking ? 10 : 0)
    : `-${drawerHeight - toggleHeight - (isPeeking ? 10 : 0)}px`;

  return (
    <section
      ref={drawer => setRef(drawer)}
      className="navigation"
      style={{ bottom: drawer ? drawerOffset : "-50%" }}
    >
      <button
        className="navigation__toggle"
        onFocus={() => setPeek(true)}
        onBlur={() => setPeek(false)}
        onClick={handleDrawerClick(isOpen, setOpen, drawer)}
      >
        <MenuIcon />
      </button>
      <ul className="navigation__inner">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/resources">
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/resources">
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/resources">
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/resources">
            Resources
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Navigation;
