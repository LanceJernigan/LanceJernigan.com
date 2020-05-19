import React from "react";
import { Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";

import Wrapper from "./components/wrapper";
import Home from "./pages/home";
import About from "./pages/about";
import Resource from "./components/resource";
import Resources from "./pages/resources";
import FourOhFour from "./pages/fourOhFour";
import PrincipleConnnect from "./resources/principleConnect";

const Routes = ({ scrollToTop }) => {
  return (
    <Route
      render={({ location, history }) => {
        ReactGA.set({
          page: location.pathname + location.search
        });
        ReactGA.pageview(location.pathname);

        return (
          <Wrapper
            location={location}
            history={history}
            scrollToTop={scrollToTop}
          >
            <Switch location={location}>
              <Route path="/resource/principle-connect">
                <PrincipleConnnect />
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
          </Wrapper>
        );
      }}
    />
  );
};

export default Routes;
