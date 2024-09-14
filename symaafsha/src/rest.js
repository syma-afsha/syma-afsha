import React from "react";
import { Button, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Rest(){
    return(
        <div className="rest">





                      <p style={{color: "white", fontFamily: "serif", fontSize:19}}>To follow my projects at <a  style={{ color: "#FFFF00"}} href="https://github.com/syma-afsha" target="_blank">GituHb</a>.</p>
                  <Row>
                  <Col xs={5} sm={5} lg={3} >
            <Link style={{color: "white", textDecoration: "none"}} to ="/about-me"><Button variant="outline-primary" style={{color:"white", fontSize: 18, textAlign: "center", width: 150, height: 50, fontFamily: "serif"}}className="home-button">Read More</Button></Link></Col>
            <Col xs={5} sm={5} lg={3} >
            <a style={{color: "white", textDecoration: "none"}} href="https://drive.google.com/file/d/1BNJfhljpfxk6CkOFj2IjZmhDWqy0Xplo/view?usp=drive_link" target="_blank"> <Button variant="outline-primary" style={{color:"white", fontSize: 18, textAlign: "center", width: 150, height: 50, fontFamily: "serif", marginLeft: 25}}className="home-button">My Resume</Button></a></Col>
            
                  </Row>
                      
        </div>
        

    )
}