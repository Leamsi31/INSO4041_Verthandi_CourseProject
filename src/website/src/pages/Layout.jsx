import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Test from "./Test";
import SearchBar from "../components/SearchBar";

const Layout = () => {
  return (
    // <>
    //   <Home />
    //   <Sidebar />
    //   <Outlet />
    //   <About />

    // </>

    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Home></Home>
          <About></About>
          {/* {<Test></Test>} */}
          {/* <Projects></Projects> */}
          {/* <Blogs></Blogs> */}
          {/* <Timeline></Timeline> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
