import React, { Component } from "react";
import "./Auth.css";
import TagSelector from "../components/TagSelection";

export default class Auth extends Component {
  constructor() {
    super();
    this.state = {
      signIn: true,
      signUp: false,
      tagSelector: false,
    };
  }
  render() {
    return (
      <div className="SignupFormBody">
        <iframe name="dummy" title="dummy" className="hidden"></iframe>
        <section className="forms-section">
          <div className="forms">
            <div
              className={"form-wrapper".concat(
                this.state.signIn ? " is-active" : ""
              )}
            >
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    signIn: true,
                    signUp: false,
                    tagSelector: false,
                  });
                }}
                className="switcher switcher-login"
              >
                Login
                <span className="underline"></span>
              </button>
              <form className="form form-login">
                <fieldset>
                  <legend>
                    Please, enter your email and password for login.
                  </legend>
                  <div className="input-block">
                    <label htmlFor="login-username">Username</label>
                    <input id="login-username" type="username" required></input>
                  </div>
                  <div className="input-block">
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" type="password" required></input>
                  </div>
                </fieldset>
                <button type="submit" className="btn-login">
                  Login
                </button>
              </form>
            </div>

            <div
              className={"form-wrapper".concat(
                this.state.signUp ? " is-active" : ""
              )}
            >
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    signIn: false,
                    signUp: true,
                    tagSelector: false,
                  });
                }}
                className="switcher switcher-signup"
              >
                Sign Up
                <span className="underline"></span>
              </button>
              <form className="form form-signup" target="dummy">
                <fieldset>
                  <legend>
                    Please, enter your email, password and password confirmation
                    for sign up.
                  </legend>

                  <div className="input-block">
                    <label htmlFor="signup-username">Username</label>
                    <input id="signup-username" type="username" required></input>
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password">Password</label>
                    <input
                      id="signup-password"
                      type="password"
                      required
                    ></input>
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password-confirm">
                      Confirm password
                    </label>
                    <input
                      id="signup-password-confirm"
                      type="password"
                      required
                    ></input>
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-mayor">Major</label>
                    <input id="signup-mayor" type="mayor" required></input>
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password">Coursing Year</label>
                    <input
                      id="signup-coursingYear"
                      type="coursingYear"
                      required
                    ></input>
                  </div>
                </fieldset>
                <button
                  type="submit"
                  onClick={() => {
                    this.setState({
                      signIn: false,
                      signUp: false,
                      tagSelector: true,
                    });
                  }}
                  className="btn-login">
                  Continue
                  <span className="underline"></span>
                </button>
              </form>
            </div>

            <div
              className={"form-wrapper".concat(
                this.state.tagSelector ? " is-active" : ""
              )}
            >
              <form className={"form form-tagselector" + (this.state.tagSelector ? "" : " hidden")} >
                <fieldset>
                  <legend>
                    Please, select the tags corresponding to the interest you
                    may have.
                  </legend>
                  <TagSelector></TagSelector>
                </fieldset>
                <button type="submit" className="btn-login">
                  Done
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
