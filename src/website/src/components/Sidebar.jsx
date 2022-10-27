import React, { Component } from "react";
import SearchBar from "./SearchBar";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url('images/index.jpg')" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">RSEA@UPRM</a>
              </h1>
              {/* <span className="email"><i className="icon-mail"></i> verthandi@gmail.com</span> */}
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <div>
                    <li>
                      <SearchBar
                        placeholder="Search for extracurriculars..."
                        data={""}
                      />
                      {/*Added search bar*/}
                    </li>
                  </div>

                  {/* {<li><a href="https://www.stealmylogin.com/demo.html" data-nav-section="Login">Login</a></li> } */}
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  {/* <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li> */}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                {
                  <li>
                    <a
                      href="https://www.stealmylogin.com/demo.html"
                      data-nav-section="Login"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Login
                    </a>
                  </li>
                }
                {
                  <li>
                    <a href="test">Activities</a>
                  </li>
                }
                {/* <li><a href="https://twitter.com/romerocruzsa" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li> */}
                {/* <li><a href="https://www.instagram.com/romerocruzsa/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li> */}
                {/* <li><a href="https://www.linkedin.com/in/romerocruzsa/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li> */}
                <li>
                  <a
                    href="https://github.com/Leamsi31/INSO4041_Verthandi_CourseProject"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
                {/* <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li> */}
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  <br></br>
                  Introduction to Software Engineering<br></br>
                  Course Project<br></br>
                </small>
              </p>
              <p>
                <small>
                  <br></br>
                  Something coming soon!<br></br>
                  <br></br>
                  <br></br>
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
