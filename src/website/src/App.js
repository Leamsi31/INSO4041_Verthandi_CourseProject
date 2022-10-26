import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Timeline from './components/Timeline'
import Blogs from './components/Blogs'
import Projects from './components/Projects';
import Test from './pages/Test';
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route} from "react-router-dom";



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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route exact path="/test" element={<Test />} />
          
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;