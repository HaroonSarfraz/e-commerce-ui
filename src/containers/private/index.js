import React from 'react';
import Navbar from "../../components/shared/private/navbar";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../../config/history";

import { Home } from '../../screens';

export default class Private extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="public-container">
          <Navbar />
          <Switch>
            <Route
              path={"/"}
              exact={true}
              component={Home}
            />
            <Route
              path={"/home"}
              component={Home}
            />
            <Route
              render={() => <Redirect to="/" />}
            />
          </Switch>
        </div>
      </Router>)
  }
}
