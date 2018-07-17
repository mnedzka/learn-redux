import React from "react";

import { render } from "react-dom";

import Main from "./data/components/Main";
import Single from "./data/components/Single";
import PhotoGrid from "./data/components/PhotoGrid";

//Import css
import css from "./styles/style.styl";

//Import React Router
import { Router, Route, IndexRoute, browserHistory } from "react-router";

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}>.</IndexRoute>
      <Route path="/view/:postID" component={Single}>
        .
      </Route>
    </Route>
  </Router>
);

render(router, document.getElementById("root"));
