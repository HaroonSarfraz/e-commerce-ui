import './style.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from "../../config/history";
import { signInUser } from "../../actions/auth";

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm = (e) => {
    e.preventDefault()

    const { signInUser } = this.props

    const {
      email,
      password,
    } = this.state;

    signInUser({ email, password })
      .then(history.push("/"))
      .catch((error) => console.log(error.response.data.errors))
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in-container">
        <div className="col-md-6 mx-auto text-center">
          <div className="header-title">
            <h1 className="wv-heading--title">
              Check out — it’s free!
            </h1>
            <h2 className="wv-heading--subtitle">
              Lorem ipsum dolor sit amet! Neque porro quisquam est qui do dolor amet, adipisci velit...
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="myform form ">
              <form onSubmit={this.submitForm}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control my-input"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control my-input"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-center ">
                  <button type="submit" className=" btn btn-block send-button tx-tfm">Log In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { signInUser },
)(SignIn)
