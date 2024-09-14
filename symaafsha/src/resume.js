import React from "react";
import PDF from  "./image/pdf.png";
import "./research.css"


export default function Resume(){
    return(
        <div>
            <p className="text-pdf">Click Bellow to Download My CV</p>
            <a href="https://drive.google.com/file/d/1BNJfhljpfxk6CkOFj2IjZmhDWqy0Xplo/view?usp=drive_link" target="_blank" style={{textAlign:"center"}}><img src={PDF} att="pdf" className="pdf"/></a>
        </div>
    )
}