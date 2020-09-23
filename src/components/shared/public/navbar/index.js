import "./style.scss";
import React from "react";

import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return(
      <div id="public-navbar">
        <nav className={`navbar navbar-default`}>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="createy-log">
                <a className="navbar-brand" href="/">
                </a>
              </div>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <div className="row">
                <div className="col-md-offset-5 col-sm-offset-3">

                </div>

                <div className="right-links">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to='/sign-up' className="btn btn-signup">Sign Up</Link>
                    </li>

                    <li>
                      <Link to='/sign-in' className="btn btn-link">Log In</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
