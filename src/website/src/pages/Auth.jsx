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
      <body id="auth-body">
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
                      <label htmlFor="loginUsername">Username</label>
                      <input
                        id="loginUsername"
                        type="username"
                        name="loginUsername" 
                        placeholder = "Enter Username Here"
                        required>

                      </input>
                    </div>
                    <div className="input-block">
                      <label htmlFor="loginPassword">Password</label>
                      <input 
                        id="loginPassword" 
                        type="password"
                        name="loginPassword"
                        placeholder="Enter your Password" 
                        required>

                      </input>
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
                      <label htmlFor="sigupUsername">Username</label>
                      <input 
                      id="sigupUsername" 
                      type="username" 
                      placeholder="Keko Jones"
                      required></input>
                    </div>
                    <div className="input-block">
                      <label htmlFor="signupPassword">Password</label>
                      <input
                        id="signupPassword"
                        type="password"
                        placeholder="Create a Password"
                        required
                      ></input>
                    </div>
                    <div className="input-block">
                      <label htmlFor="signupPassword2">
                        Confirm password
                      </label>
                      <input
                        id="signupPassword2"
                        type="password"
                        placeholder="Match Password"
                        required
                      ></input>
                    </div>
                    <div className="input-block">
                      <label htmlFor="major">Major</label>
                      <input 
                      id="major" 
                      type="major"
                      placeholder="Enter your Major Here" 
                      required>

                      </input>
                    </div>
                    <div className="input-block">
                      <label htmlFor="coursingYear">Coursing Year</label>
                      <input
                        id="coursingYear"
                        type="coursingYear"
                        placeholder="years of suffering here"
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
      </body>
    );
  }
}
