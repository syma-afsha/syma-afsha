import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import AboutBody from './About-body';
import AboutMobileBody from './about-mobile-body';

function About(){
    return(
       
    <div className="About" style={{backgroundColor: "black"}}>
       <Navbar/>
<AboutBody/>
<AboutMobileBody/>
<Footer/>

        </div>

    )
}
export default About;