import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import ProjectBody from './projectBody';


function About(){
    return(
       
    <div className="Project" style={{backgroundColor: "black"}}>
       <Navbar/>
<ProjectBody/>

<Footer/>

        </div>

    )
}
export default About;