import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Resource from "./components/resource";
import FourOhFour from "./pages/fourOhFour";

const Routes = () => (
  <section className="page">
    <Switch>
      <Route path="/resource/:slug">
        <Resource />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route>
        <FourOhFour />
      </Route>
    </Switch>
  </section>
);

export default Routes;
