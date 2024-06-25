

import React, { Component } from 'react';

import Home from './Home';
import About from "./About";



import {
  HashRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Research from './research';
import Publication from './publication';




export default class App extends Component {
  
  

  render() {


    return (
      <Router>


        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/research" element={<Research />} />
          <Route path="/publication" element={<Publication />} />
        </Routes>



      </Router>


    )

  }
}
