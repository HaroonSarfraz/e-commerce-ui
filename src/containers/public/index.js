import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../../config/history";

import { SignUp, SignIn } from '../../screens';
import Navbar from "../../components/shared/public/navbar";

class Public extends React.Component {
  render() {
    return (
      <Router >
        <div className="public-container">
          <Navbar />
          <Switch>
            <Route
              path={"/"}
              exact={true}
              component={SignUp}
            />
            <Route
              path={"/sign-in"}
              component={SignIn}
            />
            <Route
              path={"/sign-up"}
              component={SignUp}
            />
            <Route
              render={() => <Redirect to="/" />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Public;
