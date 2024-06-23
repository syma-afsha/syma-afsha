import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PublicationBody from "./publicationBody";
export default function Publication(){
    return(
        <div className="publication">
            <Navbar/>
            <PublicationBody/>
            <Footer/>
        </div>
    )
}