import React, { Component } from "react";
import "./App.css";
import Test from "./pages/Test.jsx";
import Layout from "./pages/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import TagSelection from "./components/TagSelection.jsx";
import Profile from "./pages/Profile.jsx";
import ProfileEdit from "./pages/ProfileEdit.jsx";

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
            <Route exact path="/TagSelection" element={<TagSelection />} />
            <Route exact path="/Profile" element={<Profile />} />
            <Route exact path="/ProfileEdit" element={<ProfileEdit />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
