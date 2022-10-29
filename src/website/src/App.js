import React, { Component } from "react";
import "./App.css";
import Test from "./pages/Test.jsx";
import Layout from "./pages/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth.jsx";

class App extends Component {
  render() {
    // return (

    //   <div id="colorlib-page">
    //     <div id="container-wrap">
    //      	<Sidebar></Sidebar>
    // 		<div id="colorlib-main">
    // 			<Home></Home>
    // 			<About></About>
    //       {/* <Projects></Projects> */}
    //       {/* <Blogs></Blogs> */}
    // 			{/* <Timeline></Timeline> */}
    //       	</div>
    //   	</div>
    //   </div>
    // );
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Layout />} />
            <Route exact path="/test" element={<Test />} />
            <Route exact path="/Auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
