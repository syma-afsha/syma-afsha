// import React from "react";
// import "./project.css";
// import { FaGithub } from 'react-icons/fa';
// export default function ProjecthBody(){
//     return(
//         <div className="Projectbody">
//             <div className="project-container">
//             <p className="project-text"><b>Project Highlights</b></p>
//             <div>
//             <ul style={{ listStyleType: "circle" }}>
//                             <li > DiscoverBot: Advancing Autonomous Exploration through Frontier and Informed-RRT* Fusion in TurtleBot. <i style={{ color: 'yellow' }}>2024</i></li>
//                             <li > AR-TurtleSLAM: EKF-based Localization and Mapping using ArUco Feature Detection on TurtleBot. <i style={{ color: 'yellow' }}>2024</i></li>
                            
//                             <li > PoseNet: Real-time Camera Pose Estimation in Stonefish (ROS) with ArUco Markers for TurtleBot. <i style={{ color: 'yellow' }}>2024</i></li>
//                             <li > RoboPick: Task Prioritized Object Manipulation on TurtleBot with 4 DOF Arm, Utilizing ArUco-based Object Detection. <i style={{ color: 'yellow' }}>2024</i></li>
//                             <li > Set up a ROS Environment in Gazebo for Autonomous Object Pick-and-Place Using Behavior Trees with a Simulated TurtleBot3. <i style={{ color: 'yellow' }}>2024</i></li>
//                             <li > Implemented an RRT* Path Planner with Occupancy Grid Map and Low-Level Controller in ROS and Gazebo to Navigate from Start to Goal. <i style={{ color: 'yellow' }}>2024</i></li>
//                             <li>Worked on Sign Language Translation Module, Violence Detection Module and Film Censorship and Rating
//                                 Module. <i style={{ color: 'yellow' }}>2021-2023</i></li>
//                             <li > Developed a website for remote sensing using IoT for a research group at the University of New Hampshire, New
//                                 Hampshire, United States. <i style={{ color: 'yellow' }}>2022</i></li>
//                             <li>Demonstration of Frequency Handoff and Call drop for 2G and 3G networks. <i style={{ color: 'yellow' }}>2021</i></li>
//                             <li>Website for the 5th International Conference on Electrical Engineering and Information & Communication
//                                 Technology (ICEEICT) for the Military Institute of Science and Technology (MIST). <i style={{ color: 'yellow' }}>2021</i></li>
//                             <li> Advanced Elevator with overload alert system. <i style={{ color: 'yellow' }}>2021</i></li>
//                             <li>Implementation of Voice Signal Filtration and Identification using custom Frequency Factor based algorithm in
//                                 software-based attendance collection. <i style={{ color: 'yellow' }}>2020</i></li>
//                             <li>Soil moisture detection and Plant watering system using Arduino. <i style={{ color: 'yellow' }}>2019</i> </li>
//                         </ul>
//                         <h2 style={{color: "#00FFFF", textAlign: "center", fontSize: 20 , textShadow: "2px 2px 4px #000000" ,fontFamily: "Lobster, cursive" }}>
//     <u>
//         <b>
//             Discover More of My Projects - Unlock My Project Gallery: 
//             <a href="https://github.com/syma-afsha" target="_blank" style={{ color: "#FF6347", textDecoration: "none", marginLeft: 10 }}>
//                 <FaGithub className="github-icon" style={{fontSize: "38px", transition: "transform 0.3s, box-shadow 0.3s" }} />
//             </a>
//         </b>
//     </u>
// </h2>
//             </div>
                
           
            
//             </div>


            
         

//         </div>
    
//     )
// }


import React, { useState } from 'react';
import ProjectCard from './projectcard';

import './project.css'; // Import your CSS here

function ProjectBody() {
    const projects = [
        { id: 1, title: 'DiscoverBot: Advancing Autonomous Exploration through Frontier and Informed-RRT* Fusion in TurtleBot. ', description:'p',imageUrl: '.../image/P2.png', videoUrl: "https://www.youtube.com/watch?v=gOgusKA3tMA&t=1s" },
        { id: 2, title: 'Project 2', imageUrl: 'path/to/image2.jpg', videoUrl: 'path/to/video2.mp4' },
        { id: 3, title: 'Project 3', imageUrl: 'path/to/image3.jpg', videoUrl: 'path/to/video3.mp4' },
        // Add more projects as needed
        { id: 15, title: 'Project 15', imageUrl: 'path/to/image15.jpg', videoUrl: 'path/to/video15.mp4' }
    ];

    return (
        <div className="ProjectBody">
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    videoUrl={project.videoUrl}
                />
            ))}
        </div>
    );
}


export default ProjectBody;
