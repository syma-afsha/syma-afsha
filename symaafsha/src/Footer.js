import React from 'react';
import './Navbar.css';
import {Container,Row, Col} from "react-bootstrap";
import linkedinIcon from "./image/footer-linkedin.png";
import researchgateIcon from "./image/footer-researchgate.png";
import mailIcon from './image/footer-mail.png';
import googleScholarIcon from "./image/googlescholar.png"
import github from "./image/github.png"

 function Footer(){
    return(
    <div className='Footer'>
 <div className='box'>
    <Row>
        <Col xs={12} md={9} lg={9}>
            <h1 className='footer-text'>© 2023, Syma Afsha. All RIghts Reserved.</h1>
            {/* <h1 style={{marginTop:1}}className='footer-text' >Thank you for visiting my website.</h1> */}
        </Col>
        <Col xs={12} md={3} lg={3}>
        
            <h1 className='footer-text1'> <span img="Pick Me" /> 👇 Connect  With  Me. 👇</h1>
            <Container className='footer-container'  >
        <a className='footer-icon' href="mailto: symaafsha.eece@gmail.com" target="_blank">
        <img
              src={mailIcon}
              alt="Mail"
              
            />
            </a>
        <a className='footer-icon' href="https://www.linkedin.com/in/syma-afsha/" target="_blank">
        <img
              src={linkedinIcon}
              alt="LinkedIn"
             
            />
            </a>
            <a className='footer-icon' href="https://www.researchgate.net/profile/Syma-Afsha" target="_blank">
        <img
              src={researchgateIcon}
              alt="ResearchGate"
              
            />
            </a>
            <a className='footer-icon' href="https://github.com/syma-afsha/symaafsha" target="_blank">
        <img
              src={github}
              alt="Github"
              
            />
            </a>
            <a className='footer-icon' href="https://scholar.google.com/citations?hl=en&user=W-tNEtEAAAAJ" target="_blank">
        <img
              src={googleScholarIcon}
              alt="Googlescholar"
              
            />
            </a>
            </Container>
        </Col>
    </Row>
 </div>
    
        </div>
    )
 }
 export default Footer;