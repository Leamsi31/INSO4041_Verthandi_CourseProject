import React, { Component } from "react";
import "./Auth.css";
import TagSelector from "../components/TagSelection";
import axios from "axios"

export default class Auth extends Component {
  
  constructor() {
    super();
    this.state = {
      signIn: true,
      signUp: false,
      tagSelector: false,
      username: "",
      hash: "",
      tags: [],
      coursingYear: 0,
      major: ""
    };
    this.dummyConfig = {
      username : "Gohan",
      hash: "Yonovoyaguardar",
      tags: ["Social", "Política"],
      coursingYear: 3,
      major: "ININ"
      
  }; 
    this.url = "/Auth";

    

    

  }
  

  handleUsername(e) {
    this.setState({username : e.target.value})
    var x = "This is e value:"
    console.log(x)
    console.log(e.target.value)
  }
  handlePassword(e){
    this.setState({hash : e.target.value})
    
  }
  handleTags(e){
    //this.setState({tags: document.getElementById("signup-coursingYear").value})
  }
  handleCoursingYear(e){
    this.setState({coursingYear : e.target.value})
  }

  handleMajor(e){
    this.setState({major : e.target.value})
  }

  handleSignup(){
    const config = {
      username : this.state.username,
      hash: this.state.hash,
      tags: ["Social", "Política"],
      coursingYear: this.state.coursingYear,
      major: this.state.major
    }

    axios.post(this.url, config)
      .then(res => console.log('Data send'))
      .catch(err => console.log(err.data))
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
                  
                  // This sends the data created in the constructor everytime you click the Sign Up Button!!!
                  // axios.post(this.url, this.dummyConfig)
                  // .then(res => console.log('Data send'))
                  // .catch(err => console.log(err.data))
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
                    <input id="signup-username" type="username" onChange={ this.handleUsername.bind(this) }  required></input>
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password">Password</label>
                    <input
                      id="signup-password"
                      type="password"
                      onChange={ this.handlePassword.bind(this) } 
                      
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
                    <input id="signup-mayor" type="mayor" onChange={ this.handleMajor.bind(this) }  required></input>
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password">Coursing Year</label>
                    <input
                      id="signup-coursingYear"
                      type="coursingYear" 
                      onChange={ this.handleCoursingYear.bind(this) } 
                      
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
                    this.handleSignup()
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
                <button type="submit" className="btn-login"
                >
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
