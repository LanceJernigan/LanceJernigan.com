import React from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./pages/home";
import About from "./pages/about";
import Resource from "./components/resource";
import Resources from "./pages/resources";
import FourOhFour from "./pages/fourOhFour";

const Routes = () => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup className="page">
          <CSSTransition
            key={location.key}
            classNames="animated-page"
            timeout={1000}
          >
            <Switch location={location}>
              <Route path="/resource/:slug">
                <Resource />
              </Route>
              <Route path="/resources">
                <Resources />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route>
                <FourOhFour />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default Routes;
