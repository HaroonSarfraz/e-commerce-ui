import "./style.scss";
import React from "react";

import routes from "../../../../config/routes";
import { Link, withRouter } from "react-router-dom";

import { AccountCircle, ShoppingCart } from '@material-ui/icons'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signOutUser } from "../../../../actions/auth";

class Navbar extends React.Component {
  handleSignOut = (e) => {
    e.preventDefault();

    this.props.signOutUser()
  }

  render() {
    const currentLocation = this.props.location.pathname.substring(1) || "home";

    return(
      <div id="customer-navbar">
        <nav className={`navbar navbar-default ${"home" === currentLocation ? "home-background" : ""}`}>
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
                  Shop
                </a>
              </div>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <div className="row">
                {/* 1 of col-md is assigned to the headers */}
                <div className="col-md-9">
                  <ul className="nav navbar-nav links">
                    {routes.map((route, index) => (
                      route.showInMenu &&
                      <li
                        key={index}
                        className={`${route.eventKey === currentLocation ? "custom-active" : ""}`}
                      >
                        <Link to={route.path} className="btn btn-link">{route.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-md-2 icons-list">
                  <ul className="nav navbar-nav icons">
                    <li className="dropdown cart">
                      <a href="/user" data-toggle="dropdown" aria-expanded="false"><AccountCircle /></a>
                        <ul className="dropdown-menu" role="menu">
                          <li><Link to='/user/settings' className="btn btn-link">Profile</Link></li>
                          <li className="divider"></li>
                          <li><a href="/signOut" className="btn btn-link" onClick={this.handleSignOut}>Sign Out</a></li>
                        </ul>
                    </li>
                    <li className={`cart ${"cart" === currentLocation ? "custom-active-cart" : ""}`}>
                      <Link to='/cart' className="btn btn-link">
                        <ShoppingCart />
                      </Link>
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

const mapDispatchToProps = dispatch => ({
  signOutUser: bindActionCreators(signOutUser, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Navbar));
