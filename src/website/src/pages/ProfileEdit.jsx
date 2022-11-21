import React, { Component } from "react";
import "./Profile.css";
import TagSelector from "../components/TagSelection";
export default class Profile extends Component {
  render() {
    return (
      <html>
        <body id="profile-body">
          <div className="container">
            <div className="main-body">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <div className="mt-3">
                          <h2 className="name">Hiroyuki Sawano</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-3">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-twitter mr-2 icon-inline text-info"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                          </svg>
                          LinkedIn
                        </h6>
                        <div className="input-block">
                          <label htmlFor="edit-linkedin">LinkedIn</label>
                          <input id="edit-linkedin" type="linkedin"></input>
                        </div>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-twitter mr-2 icon-inline text-info"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                          Twitter
                        </h6>
                        <div className="input-block">
                          <label htmlFor="edit-twitter">Twitter</label>
                          <input id="edit-twitter" type="twitter"></input>
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram mr-2 icon-inline text-danger"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                          Instagram
                        </h6>
                        <div className="input-block">
                          <label htmlFor="edit-instagram">Instagram</label>
                          <input id="edit-instagram" type="instagram"></input>
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-facebook mr-2 icon-inline text-primary"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                          Facebook
                        </h6>
                        <div className="input-block">
                          <label htmlFor="edit-facebook">Facebook</label>
                          <input id="edit-facebook" type="facebook"></input>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <h4 className="mb-0">Full Name</h4>
                        </div>
                        <div className="input-block">
                          <label htmlFor="edit-fullname">Full Name</label>
                          <input id="edit-fullname" type="fullname"></input>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h4 className="mb-0">Email</h4>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          hiroyuki.sawano@upr.edu
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h4 className="mb-0">Phone</h4>
                        </div>
                        <div className="input-block">
                          <label htmlFor="edit-phonenumber">Phone</label>
                          <input id="edit-phone" type="phone"></input>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h4 className="mb-0">Major</h4>
                        </div>
                        <div className="input-block">
                          <label htmlFor="edit-major">Major</label>
                          <input id="edit-major" type="major"></input>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h4 className="mb-0">Coursing Year</h4>
                        </div>
                        <div className="input-block">
                          <label htmlFor="edit-coursingyear">Major</label>
                          <input id="edit-major" type="major"></input>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h4 className="mb-0">Tags</h4>
                          <TagSelector></TagSelector>
                        </div>
                        <div className="col-sm-9 text-secondary"></div>
                      </div>
                      <hr />
                      <div className="input-block">
                        <label htmlFor="login-password">
                          *Required: Re-enter password to confirm{" "}
                        </label>
                        <input
                          id="login-password"
                          type="password"
                          required
                        ></input>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-12">
                          <a
                            class="btn btn-info "
                            target="__blank"
                            href="Profile"
                          >
                            Save
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}
