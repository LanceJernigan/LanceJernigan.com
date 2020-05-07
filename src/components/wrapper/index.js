import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Wrapper = ({ location, history, children, scrollToTop }) => {
  return (
    <TransitionGroup className="page">
      <CSSTransition
        key={location.key}
        classNames="animated-page"
        timeout={1000}
        onExited={scrollToTop}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Wrapper;
