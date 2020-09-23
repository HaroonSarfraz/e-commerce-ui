import './style.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from "../../config/history";
import { registerUser } from "../../actions/auth";

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    nickName: '',
    name: '',
    confirmPassword: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm = (e) => {
    e.preventDefault()

    const { registerUser } = this.props

    const {
      email,
      nickName,
      password,
      name
    } = this.state

    registerUser({ email, nickName, password, name })
      .then(history.push("/"))
      .catch((error) => console.log(error.response.data.errors))
  }

  render() {

    const { name, email, nickName, password, confirmPassword } = this.state;

    return (
      <div className="sign-up-container">
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
                    type="text"
                    name="nickName"
                    className="form-control my-input"
                    id="nickName"
                    placeholder="Nick Name"
                    value={nickName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control my-input"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Name"
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
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control my-input"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-center ">
                  <button type="submit" className=" btn btn-block send-button tx-tfm">Create Your Free Account</button>
                </div>
                <div className="col-md-12 ">
                  <div className="login-or">
                    <hr className="hr-or" />
                    <span className="span-or">or</span>
                  </div>
                </div>
                <p className="small mt-3">
                  By signing up, you are indicating that you have read and agree to the <a href="#" className="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                </p>
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
  { registerUser },
)(SignUp)
