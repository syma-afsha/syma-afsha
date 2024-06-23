import React from "react";
import './App.css';
import "animate.css/animate.min.css";
import 'bootstrap/dist/css/bootstrap.css';

import Rest from "./rest"
import myImage from './image/cv.png';
import { Container, Card, Row, Col, Button } from "react-bootstrap";

export default function HomeBody(){
    return(
        <div className="Home">
            <Container>
      
      <Row>

        <Col xs={12} md={6} lg={6} >

          <Card className="home-card" style={{backgroundColor: "black"}} >
            <Card.Img

              src={myImage} alt="MYIMAGE" className='myimage'> 
            </Card.Img>

          </Card>
          <hr className="hr" />

        </Col>
       
        <Col xs={12} md={6} lg={6} >
         
<Container>
            <Card.Body className='body-text'>
              <Card.Title className='about-title'style={{color: "white", fontFamily: "serif", fontSize:20}}><b> I am Syma Afsha, a Pioneering Robotics Engineer and Visionary Researcher.</b> </Card.Title>
              <br/>
              
              <Card.Text className='about-text'> 
              I am currently enrolled in the Erusmus Mundus Joint Master in Robotics and Intelligent Systems (IFRos), coordinated by the Universitat de Girona (UdG), Spain, in collaboration with the University of Zagreb (UNIZG), Croatia, and the Eötvös Loránd University (ELTE), Hungary.

For the first two semesters, I attended courses at the Universitat de Girona (UdG), where I gained comprehensive knowledge and hands-on experience in Robotics and Intelligent systems. From September 2024, I will continue my studies for the third semester at the Eötvös Loránd University (ELTE), Hungary, further expanding my expertise and practical skills in this dynamic field. I received my Bachelor of Science (B.Sc.) degree from the Department of Electrical, Electrical and Communication Engineering (EECE) at the Military Institute of Science and Technology (MIST), Bangladesh. <br/>
                <br/> My areas of interest in terms of research are Mobile Robotics, Autonomous Vehicle (AV), Machine Learning (ML), Computer Vision (CV), and Natural Language Processing (NLP). Currently, I am working on Vision Transformer (ViT) based object detection, which is an advanced approach in the field of Computer Vision.  
              </Card.Text>

          <Rest/>
        
            </Card.Body>
        </Container>
   
        </Col>

      </Row>
  
    </Container>

        </div>

    )
}