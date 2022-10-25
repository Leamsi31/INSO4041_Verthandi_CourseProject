import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Timeline from './components/Timeline'
import Blogs from './components/Blogs'
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Home></Home>
					<About></About>
          {/* <Projects></Projects> */}
          {/* <Blogs></Blogs> */}
					{/* <Timeline></Timeline> */}
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;