import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url('images/okabe.jpg')" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Recommendation System for Extracurricular Activities
                            at University of Puerto Rico, Mayagüez
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://docs.google.com/document/d/1d6oRKmaE86w5keAACIiFTA291jyv0gRLd1pFrXoobTM/edit?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View proposal <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{ backgroundImage: "url('images/literally_me1.jpg')" }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            Introduction to Software Engineering,
                            <br />
                            Course Project
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/Leamsi31/INSO4041_Verthandi_CourseProject"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View project <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {
                <li
                  style={{
                    backgroundImage: "url(images/Target_Audience1.jpg)",
                  }}
                >
                  <div className="overlay" />
                  <div className="container-fluid" />
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            I often <br />
                            Write ...{" "}
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://dhruvbarochiya.me/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Blog <i className="icon-book" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              }
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
