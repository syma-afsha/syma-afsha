import React from "react";
import Badge1 from "./image/badge(1).png"
import "./about.css"
import Badge from "./image/badge.png";
import { FaGithub } from 'react-icons/fa';
import { Container, Row, Col } from "react-bootstrap";
import Resume from "./resume";
import EU from "./image/erusmus.png";
import MIST from "./image/MIST.png";
import DCC from "./image/DCC.png";
import AK from "./image/AKK.png"
import Cap from "./image/cap.png"
import IFROS from "./image/IFROS.png"

export default function AboutMobileBody() {

   
    return (

        <div className="AboutMobileBody">
  <p className="about-header" ><b>About Me</b></p>
            <Container>
             

                <div className="content-container">
              
                <h className="tabs-list">Academic Credentials </h>
                <div className="container">
                        <Row>
                            <Col xs={12}>
                                <h>   <u>Master of Science (M.Sc.)</u></h>
                                
                                <p style={{marginLeft:55}}>IFRos Master programme is coordinated by the Universitat de Girona (UdG, Spain) together with the University of Zagreb (UNIZG, Croatia) and the Eötvös Loránd University (ELTE, Hungary). </p>
                                        <p style={{marginLeft:55}}>Erasmus Mundus Joint Master in Intelligent Field Robotic Systems(IFRos)</p>

                                        <p style={{marginLeft:55}}>Europe</p>
                                        <p style={{marginLeft:55}}><i>2023-2025</i></p>
                                
                                
                            </Col>
                            

                        </Row>

                        <Row>
                            <Col xs={12} >
                                <h ><u>Bachelor of Science (B.Sc.)</u></h>
                                <p>Military Institute of Science and Technology (MIST)</p>
                                <p>B.Sc. in Electrical, Electronic and Communication Engineering (EECE)</p>
                                <p>CGPA: 3.68/4.00</p>
                                <p>Dhaka, Bngladesh</p>
                                <p><i>2018-2022</i></p>
                            </Col>
                            <Col xs={3} md={3} lg={3}>
                                <img src={MIST} alt="MIST" className="image-about" />
                            </Col>

                        </Row>
                        <Row>
                            <Col xs={9} md={9} lg={9}>
                                <h><u>Higher Secondary Certificate (HSC)</u></h>
                                <p>Dhaka City College</p>
                                <p>GPA: 5.00/5.00</p>
                                <p>Dhaka, Bangladesh</p>
                                <p><i>2017</i></p> </Col>
                            <Col xs={3} md={3} lg={3}>
                                <img src={DCC} alt="DCC" className="image-about" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={9} md={9} lg={9}>
                                <h><u>Secondary School Certificate (SSC)</u></h>
                                <p>A.K High School and College</p>
                                <p>GPA: 5.00/5.00</p>
                                <p>Dhaka, Bangladesh</p>
                                <p><i>2015</i></p> </Col>
                            <Col xs={3} md={3} lg={3}>
                                <img src={AK} alt="AK" className="image-about" />
                            </Col>
                        </Row>

                    </div>
                
                  <br/> 
                  <h className="tabs-list">Research Interests</h>
                    <ul style={{ listStyleType: "square" }}>
                        <li> Mobile Robotics </li>
                            <li> Autonomous Vehicle (AV)</li>
                            <li>Machine Learning (ML)</li>
                            <li>Computer Vision (CV)</li>
                            <li>Natural Language Processing (NLP)</li>
                            
                        </ul>
                       <br/>
                        <h className="tabs-list">Technical Skills</h>
                    
                        {/* <p>  <h style={{ color: "#bcc4b7" }}> MS Office </h>: MS Word, MS PowerPoint, MS Excel</p>
                        <p> <h style={{ color: "#bcc4b7" }}> Programming Languages</h>: Python, C, MATLAB, Dart,
                            JavaScript, Verilog HDL</p>
                        <p>
                            <h style={{ color: "#bcc4b7" }}>Operating System</h>: Robot Operating System (ROS) </p>
                        <p>
                            <h style={{ color: "#bcc4b7" }}>Software and Tools</h>: Stonefish, Gazebo, Rosbag, CodeBlocks, Emu8086, Cisco Packet Tracer, Visual Studio, Proteus Design Suite, LTSpice, AutoCAD, Adobe
                            Illustrator, Simulink, Microwind, DSCH, QUARTUS’Ⅱ</p>
                        <p>
                            <h style={{ color: "#bcc4b7" }}>Web Development</h>: HTML, CSS, JavaScript, React.js, Bootstrap</p>
                        <p>
                            <h style={{ color: "#bcc4b7" }}>Machine Learning</h>:
                            TensorFlow, Scikit-Learn, PyTorch</p>
                        <p>
                            <h style={{ color: "#bcc4b7" }}>App Development</h>:
                            Flutter, Android Studio</p>
                        <p>
                            <h style={{ color: "#bcc4b7" }}>Visualisation</h>:
                            Rviz, Plotjuggler, Matplotlib, Seaborn</p>
                            <p>
                            <h style={{ color: "#bcc4b7" }}>Hardware</h>: Arduino</p> <p>
                            <h style={{ color: "#bcc4b7" }}>Version Control</h>: Git</p>
                        <p>
                            <h style={{ color: "#bcc4b7" }}>Computer Vision</h>: MATLAB, OpenCV</p> */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
  <span style={{ backgroundColor: '#bcc4b7', padding: '5px 10px', borderRadius: '5px' }}>
    Programming Languages: Python, C, C++, MATLAB, JavaScript, Dart, LATEX, Verilog HDL
  </span>
  <span style={{ backgroundColor: '#bcc4b7', padding: '5px 10px', borderRadius: '5px' }}>
    Libraries: PyTorch, TensorFlow, OpenCV, Numpy, Pandas, Matplotlib
  </span>
  <span style={{ backgroundColor: '#bcc4b7', padding: '5px 10px', borderRadius: '5px' }}>
    Software and Tools: ROS, Stonefish, Gazebo, Docker, Plotjuggler, AutoCAD
  </span>
  <span style={{ backgroundColor: '#bcc4b7', padding: '5px 10px', borderRadius: '5px' }}>
    Web Development: HTML, CSS, React.js, Bootstrap
  </span>
  <span style={{ backgroundColor: '#bcc4b7', padding: '5px 10px', borderRadius: '5px' }}>
    App Development: Flutter, Android Studio
  </span>
  <span style={{ backgroundColor: '#bcc4b7', padding: '5px 10px', borderRadius: '5px' }}>
    Version Control: Git
  </span>
</div>



                        <h style={{ color: "#00FFFF"}}> <u>Selected Certifications:</u></h>
                        <ul>
                            <li>
                                Coursera on Fundamentals of Digital Image and Video Processing Certified by Northwestern University. <a style={{ color:"yellow"}}href="https://www.coursera.org/account/accomplishments/verify/JE5BXT6HBWYL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank"><i>Link</i></a>
                            </li>
                            <li>
                                Coursera on Front-End Web UI Frameworks and Tools: Bootstrap 4 Certified by Hong Kong University Of
                                Science And Technology. <a style={{ color:"yellow"}}href="https://www.coursera.org/account/accomplishments/verify/P9QGGCGMB3DA?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank"><i>Link</i></a>
                            </li>
                            <li>
                                Coursera on Programming Foundations with JavaScript, HTML and CSS Certified by Duke University. <a style={{ color:"yellow"}}href="https://www.coursera.org/account/accomplishments/verify/8CT7BK7G9XQL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank"><i>Link</i></a>
                            </li>
                            <li>
                                Coursera on Build Your Portfolio Website with HTML and CSS Certified by Coursera Project Network. <a style={{ color:"yellow"}}href="https://www.coursera.org/account/accomplishments/verify/R4MLRNUFTF96?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project" target="_blank"><i>Link</i></a></li>
                            <li> Python Starter Pack Workshop Certified by MIST Innovation Club with support of e-learning partner ohubrihi
                                Online Courses. <a style={{ color:"yellow"}}href="https://drive.google.com/file/d/1yzZqckoRtcd7wrn8t3jVamlPieexWH5b/view" target="_blank"><i>Link</i></a>

                            </li>
                            <li>Coursera on Python Data Structures certified by Coursera Project Network. <a style={{ color:"yellow"}}href="https://www.coursera.org/account/accomplishments/verify/KBNXEBJPZ4R8?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=project" target="_blank"><i>Link</i></a></li>
                            <li>Introduction to Flutter Development Using Dart Certified by The App Brewery. <a style={{ color:"yellow"}}href="https://drive.google.com/file/d/1ZZfxpIc_e7bz2sU8oW7-WfOyYXvl2Aq7/view" target="_blank"><i>Link</i></a></li>
                        </ul>

                    
<br/>


                    <h className="tabs-list"><u><b>Professional Experience</b></u></h>
                        <br/>
                        <br/>
                        <Row >
                            <Col xs={4} >

<p> 2021-2022</p>

                            </Col>
                         
                            <Col xs={8} >
                                <h style={{color:"#1ed4c4"}}>Research Engineer</h>
                                <br/>
                                <h>Visual Information Processing (VIP), <i>MIST</i></h>
                                <br/>
                             
                                <h  style={{ color: "#bcc4b7" }}><u>Projects</u></h><br/>
                               <li><h>  Violence Detection Module.
</h></li> 
<li><h>Film Censorship and Rating Module.</h></li>
<li><h>Sign Language Translation Module.</h></li>



                                

</Col> 
</Row>
<br/>

                        <h style={{color: "#00FFFF", fontSize: 20}}><u>Internship </u></h>
                        <br/>
                        <br/>
                        <Row >
                            <Col xs={5} >

<p> 2021 (7 Days)</p>

                            </Col>
                         
                            <Col xs={7} >
                                <h style={{color:"#1ed4c4"}}>Industrial Trainee</h>
                                <br/>
                                <h>Teletalk Bangladesh Ltd.</h>
                                <br/>
                                <h style={{fontSize: 20}}> <i>Gulshan, Dhaka,Bangladesh</i> </h>
                                <br/>
                                <h  style={{ color: "#bcc4b7" }}><u>Skills</u></h><br/>
                                <h> ✓ Learned about 1G, 2G, 3G, 4G Technology, and their communication process. 
</h><br/>
<h> ✓ Exploring the existing technologies of the telecommunication field.</h>


                                

</Col> 
                        </Row>
                        <Row>
                            <Col xs={5} >
                            <p> 2021 (7 Days)</p>
                            </Col>
                            <Col xs={7} >
                            <h style={{color:"#1ed4c4"}}>Industrial Trainee</h>
                                <br/>
                                <h>Energypac Electronics Ltd.
Factory</h><br/>
<h style={{fontSize: 20}}> <i>Gazipur,Bangladesh</i> </h>
                                <br/>
                                <h  style={{ color: "#bcc4b7" }}><u>Skills</u></h><br/>
                                <h> ✓ Learned about the Light, and Fan making process.
 
</h><br/>
<h> ✓ Learned about Sales management.</h>


</Col>
                        </Row>
                        <Row >
                            <Col xs={5} >
                            <p> 2021 (7 Days)</p>    
                            </Col>
                            <Col xs={7}>
                            <h style={{color:"#1ed4c4"}}>Industrial Trainee</h>
                                <br/>
                                <h>Dhaka Electric Supply
Company Limited (DESCO)</h><br/>
<h style={{fontSize: 20}}> <i>Mirpur, Dhaka, Bangladesh</i> </h>
                                <br/>
                                <h  style={{ color: "#bcc4b7" }}><u>Skills</u></h><br/>
                                <h> ✓Learned about  Electrical Power Distribution.
 
</h><br/>
<h> ✓ Learned the necessary skills and technical information of the power field by exploring different factories.</h>

</Col>

                        </Row>
                        <p></p>
                        <img />
                    
                    
                  <br/>  
                    <h className="tabs-list">Awards & Honors</h>
                    <Row style={{marginTop:10}}>
                            <Col xs={1} md={1} lg={1}>
                            <img src= {EU} alt="EU" className="icon-about"/>
                            </Col>
                            <Col xs={11} md={11} lg={11}>
                            <p style={{marginRight:10}}> Awareded Erusmus Mundus Joint Masters Scholarship funded by European Union (EU), securing 12th place out of 958 applicants.</p>
                                </Col>
                        </Row>
                    <Row style={{marginTop:10}}>
                            <Col xs={1} md={1} lg={1}>
                            <img src= {Badge} alt="badge" className="icon-about"  />
                            </Col>
                            <Col xs={11} md={11} lg={11}>
                            <p style={{marginRight:10}}> Dean's List Award in 3rd year Issued by Military Institute of Science and Technology.</p>
                                </Col>
                        </Row>
                        <Row>
                            <Col xs={1} md={1} lg={1}>
                            <img src= {Badge1} alt="badge(1)" className="icon-about" />
                            </Col>
                            <Col xs={11} md={11} lg={11}>
                            <p style={{marginRight:10}} > Achieved 1st place in the long Python Starter Pack Workshop organized by MIST Innovation Club with support of
e-learning partner Bohubrihi Online Courses.</p>
                                </Col>
                        </Row>
                    
                </div>


            </Container>

<hr style={{color: "white", backgroundColor:"white", marginLeft: 15, marginRight: 15}}/>
<Resume/>
        </div>
    )
}
