import React from 'react';
import Navbar from "../../components/shared/private/navbar";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../../config/history";

import { Home, Shop, About, Contacts, Cart, UserSettings } from '../../screens';

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
              path={"/shop"}
              component={Shop}
            />
            <Route
              path={"/about"}
              component={About}
            />
            <Route
              path={"/contacts"}
              component={Contacts}
            />
            <Route
              path={"/user-settings"}
              component={UserSettings}
            />
            <Route
              path={"/cart"}
              component={Cart}
            />
            <Route
              render={() => <Redirect to="/" />}
            />
          </Switch>
        </div>
      </Router>)
  }
}
