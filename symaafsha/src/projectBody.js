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
import p1 from "./image/P2.png";
import slam from "./image/slam.png";
import Aruco_Stonefish from "./image/Aruco_Stonefish.png"
import './project.css'; // Import your CSS here
import pick from "./image/pick.png"
function ProjectBody() {
    const projects = [
        { id: 1, title: 'DiscoverBot: Advancing Autonomous Exploration through Frontier and Informed-RRT* Fusion in TurtleBot. ',description: 'This project proposes a novel clustering and path-planning-based exploration method. It utilizes the Density-Based Spatial Clustering of Applications with Noise (DBSCAN) algorithm to identify and cluster frontiers. Effective exploration targets are selected based on minimum distance, entropy, and information gain. For path planning, the Informed-RRT* algorithm and Dubins path planning are employed, incorporating a heuristic to guide tree growth for shorter, more efficient paths. A pure pursuit controller ensures accurate and smooth path execution by the Mobile robot.The results demonstrate significant improvements in exploration efficiency and path quality compared to traditional methods. Comparative analysis highlights the superior performance of Informed-RRT* over RRT* in terms of path optimality and computational efficiency. ',imageUrl: p1, videoUrl: "https://www.youtube.com/watch?v=gOgusKA3tMA&t=1s" },

        { id: 2, title: 'AR-TurtleSLAM: EKF-based Localization and Mapping using ArUco Feature Detection on Mobile Robots.', description: 'This project introduces AR-TurtleSLAM, an innovative approach to SLAM that uses Extended Kalman Filter (EKF) techniques combined with ArUco marker detection, implemented on a stonefish simulation platform, and then tested on Turtlebot 3. By integrating sensor data from the TurtleBot wheel encoder by calculating odometry for the prediction step and camera-based ArUco marker detection for the update step, AR-TurtleSLAM effectively manages the inherent uncertainties in sensor measurements and environmental interactions.', imageUrl: slam, videoUrl: 'https://www.youtube.com/watch?v=fQKqFyc9HQo' },

        { id: 3, title: 'PoseNet: Real-time Camera Pose Estimation in Stonefish (ROS) with ArUco Markers for TurtleBot.', description: 'This project presents a detailed study on the implementation and testing of several key techniques, including bundle adjustment, camera pose estimation using ArUco markers, and the calibration of cameras using a single ArUco marker. These methodologies were evaluated using the Stonefish ROS simulator and Real Environment to ensure their robustness and reliability.',imageUrl: Aruco_Stonefish, videoUrl: 'https://www.youtube.com/watch?v=PSAO1bBxmjE' },
        // Add more projects as needed
        { id: 4, title: 'RoboPick: Task Prioritized Object Manipulation on TurtleBot with 4 DOF Arm, Utilizing ArUco-based Object Detection.', description: 'This project shows how combining advanced control methods with reliable navigation tools can improve the performance of mobile robots. Through simulations and real-world testing, this research demonstrates how VMS can automate complex tasks with high accuracy and reliability. In the implementation phase, the focus is on building the software within the Robot Operating System (ROS). Here, behavior trees are used to manage the sequences for picking, transporting, and placing objects. These trees ensure the tasks are performed smoothly and effectively. The use of ArUco markers for locating and navigating enhances the robot’s ability to detect and handle objects accurately.',imageUrl: pick, videoUrl: 'https://www.youtube.com/watch?v=5xvpcZMMjLQ' }
    ];

    return (
        <div className="ProjectBody">
              <h2 style={{color: "#00FFFF", textAlign: "center", fontSize: 20 , textShadow: "2px 2px 4px #000000" ,fontFamily: "Lobster, cursive" }}>
     <u>
         <b>
             Discover More of My Projects - Unlock My Project Gallery: 
             <a href="https://github.com/syma-afsha" target="_blank" style={{ color: "#FF6347", textDecoration: "none", marginLeft: 10 }}>
                 <FaGithub className="github-icon" style={{fontSize: "38px", transition: "transform 0.3s, box-shadow 0.3s" }} />
             </a>
         </b>
     </u>
 </h2>
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
