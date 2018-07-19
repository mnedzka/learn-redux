import React from "react";

import { render } from "react-dom";

// import Components
import App from "./data/components/App";
import Single from "./data/components/Single";
import PhotoGrid from "./data/components/PhotoGrid";

//Import css
import css from "./styles/style.styl";

//Import React Router
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postID" component={Single}>
          .
        </Route>
      </Route> 
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));

